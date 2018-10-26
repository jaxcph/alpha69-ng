import { Subscription, timer, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Member, Tipjar, Wallet, StreamSessionGoal, MemberBlock, StreamSession } from 'src/app/member/member.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { throwMatDialogContentAlreadyAttachedError, MatDialog } from '@angular/material';
import { UIService } from 'src/app/common/ui.service';
import { collectExternalReferences } from '@angular/compiler';
import { OKDialogComponent } from 'src/app/common/ok-dialog/ok-dialog.component';
import { YesNoDialogComponent } from 'src/app/common/yesno-dialog/yesno-dialog.component';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, OnDestroy {

  public model: Member;
  public member: Member;


  public goalCollectedPct: number;

  public wallet:  Wallet;
  public goal: StreamSessionGoal;
  public transactions: any[];

  public tipjar: Tipjar;


  public sessionViewer: any;
  public paidPPm: number;
  public ppmMinutesLeft: number;
  public uid: string;
  public mid: string;
  public registeredAsViewer: boolean;

  public showNumberOfTransaction: number;

  private subs$: Subscription[] = [];
  private minuteTimer: Observable<any>;

  private originalSession: StreamSession;
  private suspendPpmPay: boolean;
  private originalSessionPpmAmountLimit: number;

  private sessionLeaderboard: any;

  @HostListener('window:unload', [ '$event' ])
  unloadHandler(event) {

  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHander(event) {
    // remove session viewer registration if browser crash
    if (this.registeredAsViewer) {
      this.db.doc(`session-viewers/${this.uid}`).delete().then(() => {
        this.registeredAsViewer = false;
        console.log('unregister as viewer');
      }).catch(error => {});
    }
  }

  constructor(private db: AngularFirestore,
    private router: Router,
    private auth: AuthService,
    private uiService: UIService,
    private dialog: MatDialog ) { }



  startTimer(delay: number, interval: number) {
    this.minuteTimer = timer(delay, interval);

    this.subs$.push( this.minuteTimer.subscribe(x => {
       if (this.model && this.model.session) {

        // register as a viewer if not already
          if (this.member) {

            if (!this.registeredAsViewer) {
              this.db.doc(`session-viewers/${this.uid}`)
                      .set({sid: this.model.session.id, nme: this.member.displayName, startDt: new Date(), aliveDt: new Date()})
                      .then( () => {
                        this.registeredAsViewer = true;
                        console.log('registed as viewer');
                        })
                      .catch( error => console.error(error));
            } else {
              // update aliveDt so we can filter out orphaned viewer records
              this.db.doc(`session-viewers/${this.uid}`)
                      .update({aliveDt: new Date()}).catch( error => { });
            }


          if (this.model.session.usePpm && this.model.session.ppmAmount > 0 && !this.suspendPpmPay) {
            console.log(`timer tick ${x}: has Ppm `);

            if (!this.submitTip(true, this.model.session.ppmAmount, undefined) ) {
              this.uiService.showSnackbar('You do not have enough money', null, 7000);
              this.router.navigate(['/models']);
            }


          }  else {
            console.log(`timer tick ${x}: no has Ppm `);
          }
        }

      }


    })
    );

  }

// /////////////////////////////////////////////////////////

  onTip(form: NgForm) {
    if (!this.submitTip(false, form.value.amount, form.value.message) ) {
      this.uiService.showSnackbar('You do not have enough money', null, 3000);
    }
  }



  submitTip(isPpm: boolean, amount: number, message?: string) {

        // TO DO RUN IN TRANSACTION perhaps in FUNCTION
        // in transaction :
        //  1 check wallet balance,
        //  2 reduce wallet
        //  2 increase tipjar
        //  3 check for goal, and post to goal
        //  4 write transaction
        // end transaction
        // 5 delay 500 msec

        // set new balance
        const newBalance = this.wallet.balance - amount;

        // check if has the money
        if (newBalance < 0) {
          return false;
        }

        // update personal wallet
        this.db.doc(`member-wallets/${this.uid}`).update({balance: newBalance });

        // update tipjar
        this.db.doc(`model-tipjars/${this.mid}`).update({balance: this.tipjar.balance + amount});


        // update the goal
        if (!isPpm && this.model.session.useGoal && this.goal) {
          this.db.doc(`session-goals/${this.mid}`).update({collected: this.goal.collected + amount});
        }



        // record transaction
        if (message) {
          this.db.collection('session-tips').add( {
                dt: new Date(),
                sid: this.model.session.id,
                amt: amount,
                uid: this.uid,
                nme: this.member.displayName,
                ppm: isPpm,
                msg: message
              });
        } else {
            this.db.collection('session-tips').add( {
                dt: new Date(),
                sid: this.model.session.id,
                amt: amount,
                uid: this.uid,
                nme: this.member.displayName,
                ppm: isPpm
              });
        }


        if (isPpm) {
          this.paidPPm += amount;

          if (this.model.session.inclPpmInGoal && this.model.session.useGoal && this.goal ) {
            this.db.doc(`session-goals/${this.mid}`).update({collected: this.goal.collected + amount});
          }

          if (this.model.session.inclPpmInLeaderboard) {
            this.registerLeaderboard(amount);
          }

        } else {
          this.registerLeaderboard(amount);
        }

        if (this.model.session.usePpm &&  this.model.session.ppmAmount > 0)  {
          this.ppmMinutesLeft = Math.floor(this.wallet.balance / this.model.session.ppmAmount);
        }

        return true;
  }



  registerLeaderboard(amount: number) {

    if (this.sessionLeaderboard) {
      this.db.doc(`session-leaderboard/${this.model.session.id}/leaderboard/${this.uid}`).update({
          nme: this.member.displayName,
          amt: (this.sessionLeaderboard.amt + amount),
          dt: new Date()
      });
    } else {
      this.db.doc(`session-leaderboard/${this.model.session.id}/leaderboard/${this.uid}`).set(
        {
          nme: this.member.displayName,
          amt: amount,
          dt: new Date()
        });
    }
  }


  onBuyToken(m: Member) {
    localStorage.setItem('buytoken.return.mid', this.mid);
    this.router.navigate(['/member/buytoken']);
  }

// /////////////////////////////////////////////////////////
  ngOnInit() {
    this.ppmMinutesLeft = -1;
    this.showNumberOfTransaction = 30;
    this.uid = localStorage.getItem('uid');
    this.mid = localStorage.getItem('mid');
    localStorage.removeItem('buytoken.return.mid');
    this.suspendPpmPay = false;
    this.originalSessionPpmAmountLimit = Number.MAX_SAFE_INTEGER;



    // check if blocked first
    this.subs$.push(
      this.db.collection('model-blocked', ref => ref
      .where('uid', '==', this.uid)
      .where('mid', '==', this.mid))
    .valueChanges()
    .subscribe(data => {

      console.log('MODEL-BLOCKED:');
      console.log(data);
      if (data.length === 1) {
        this.uiService.showSnackbar('You have been blocked', null, 7000);
        this.router.navigate(['/models']);
      }
    }));


    this.startTimer(5000, 59800); // delay 15 secs initial, to allow user to leave and objects to load also . calc with 200msec delay

   // this user
    this.subs$.push(
      this.db.doc(`members/${this.uid}`)
      .valueChanges()
      .subscribe( (data: Member) => {
         this.member = data;
         console.log('MEMBER ' + this.uid + ' =');
         })
    );

    // model
    this.subs$.push(
      this.db.doc(`members/${this.mid}`)
      .valueChanges()
      .subscribe( (data: Member) => {
         this.model = data;
         console.log('MID:' + this.mid);

         // check if we still have a valid active live session
         if (!this.model.session && !this.model.isModel) {
            this.uiService.showSnackbar('Live cam session has been terminated by the model. returning to model listings', null, 7000);
            this.router.navigate(['/models']);
         }

         this.subs$.push(
              this.db.doc(`session-leaderboard/${this.model.session.id}/leaderboard/${this.uid}`)
              .valueChanges()
              .subscribe(lb => ( this.sessionLeaderboard = lb ))
          );

          // check if is blocked
          if (this.model.blocked) {

            const blockedKey = `${this.uid}/`;
            for (const b of this.model.blocked) {
              if ( b.startsWith(blockedKey) ) {
                this.uiService.showSnackbar('You have been Blocked!', null, 10000);
                this.router.navigate(['/models']);
              }
            }
          }

          if (this.originalSession === null || this.originalSession === undefined) {
            // is it the first time the member object has been fetched
             this.originalSession = data.session;
             if ( this.originalSession.usePpm ) {
               this.originalSessionPpmAmountLimit = this.originalSession.ppmAmount;
             }

          } else  {

              if (this.originalSession !== data.session ) {
                console.log('session changed');

                // check ppm
                if ( (!this.originalSession.usePpm && data.session.usePpm) ||
                     (data.session.usePpm && data.session.ppmAmount >  this.originalSessionPpmAmountLimit) ) {

                  // ppm enabled after user joined
                  this.suspendPpmPay = true;
                  const dialogRef = this.dialog.open(YesNoDialogComponent, {
                    data: {
                       title: 'PLEASE CONFIRM',
                       content: `${data.session.modelName} has Enabled Pay-Per-Minute or Increased the price.
                               You will charged ${data.session.ppmAmount} tokens per minute if you continue`,
                       yesLabel: 'Accept & Continue',
                       noLabel: 'No, I will leave'
                      }
                  });

                  dialogRef.afterClosed().subscribe( result => {
                    if (result) {
                      this.suspendPpmPay = false;
                      this.originalSession = data.session;
                      this.originalSessionPpmAmountLimit = data.session.ppmAmount;
                    } else {
                      this.router.navigate(['/models']);
                    }
                  });
                }

                // check access type



              }

          }


          // transactions, get last 100
          this.subs$.push(
            this.db.collection('session-tips', ref => ref
                    .where('sid', '==' , this.model.session.id)
                    .where('ppm', '==' , false)
                    .orderBy('dt')
                    .limit(this.showNumberOfTransaction))
            .valueChanges()
            .subscribe( (items: any) => {
                console.log('TRANSACTION=');
                console.log(items);
                this.transactions = items;
              })
          );
         })

    );

    // users personal wallet
    this.subs$.push(
      this.db.doc(`member-wallets/${this.uid}`)
      .valueChanges()
      .subscribe( (data: Wallet) => {
         this.wallet = data;
         console.log('WALLET=');
         console.log(this.wallet);
         })
    );

    // users goal
    this.subs$.push(
      this.db.doc(`session-goals/${this.mid}`)
      .valueChanges()
      .subscribe( (data: StreamSessionGoal) => {
          this.goal = data;
          if (this.goal) {
            this.goalCollectedPct = Number(((this.goal.collected / this.goal.amount) * 100).toFixed(1));
          } else {
            this.goalCollectedPct = 0;
          }
          })
    );

    // tipjar
    this.subs$.push(
      this.db.doc(`model-tipjars/${this.mid}`)
      .valueChanges()
      .subscribe( (data: Tipjar) => {
         this.tipjar = data;
         console.log('TIPJAR=');
         console.log(this.tipjar);
         })
    );

  }

// ////////////////////////////////////////////////////
  ngOnDestroy(): void {

    // unsubcribe all the subscriptions
    if (this.subs$) {
      for (const s of this.subs$) {
        s.unsubscribe();
      }
    }

    // unregister as viewer
    if (this.registeredAsViewer) {
      this.db.doc(`session-viewers/${this.uid}`).delete().then(() => {
        this.registeredAsViewer = false;
        console.log('unregister as viewer');
      }).catch(error => {});
    }

    console.log('MODELS/LIVE: ngOnDestroy()');
  }

}
