import { Subscription, timer, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Member, Tipjar, Wallet, StreamSessionGoal } from 'src/app/member/member.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { UIService } from 'src/app/common/ui.service';

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

  constructor(private db: AngularFirestore, private router: Router, private auth: AuthService, private uiService: UIService) { }



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


          if (this.model.session.usePpm && this.model.session.ppm.amount > 0) {
            console.log(`timer tick ${x}: has Ppm `);

            if (!this.submitTip(true, this.model.session.ppm.amount, undefined) ) {
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
    if (this.model.session.useGoal && this.goal) {
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

    // calculate ppm info
    if (isPpm) {
      this.paidPPm += amount;
    }

    if (this.model.session.usePpm && this.model.session.ppm && this.model.session.ppm.amount > 0)  {
      this.ppmMinutesLeft = Math.floor(this.wallet.balance / this.model.session.ppm.amount);
    }

    return true;
  }

 /* testUpdateSpeed() {
    for (let i = 1 ; i < 1000; i++) {
      console.log(`SENT: ${i}`);
      this.db.doc('tester/1').update({amount: i}).then(() => {
        console.log(`OK: [${i}]`);
      }).catch( error => {
        console.log(`ERR: [${i}]`);
      });
    }
  }*/

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

    this.startTimer(5000, 59800); // delay 15 secs initial, to allow user to leave and objects to load also . calc with 200msec delay

   // this user
    this.subs$.push(
      this.db.doc(`members/${this.uid}`)
      .valueChanges()
      .subscribe( (data: Member) => {
         this.member = data;
         console.log('MEMBER ' + this.uid + ' =');
         console.log(this.member);
         })
    );

    // model
    this.subs$.push(
      this.db.doc(`members/${this.mid}`)
      .valueChanges()
      .subscribe( (data: Member) => {
         this.model = data;
         console.log('MODEL ' + this.mid + ' =');
         console.log(this.model);


         // check if we still have a valid active live session
         if (!this.model.session && !this.model.isModel) {
            this.uiService.showSnackbar('Live cam session has been terminated by the model. returning to model listings', null, 7000);
            this.router.navigate(['/models']);
         }

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
