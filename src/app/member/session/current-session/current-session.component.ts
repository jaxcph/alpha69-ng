import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member, StreamSession, StreamSessionGoal, Tipjar, Wallet, MemberBlock, Viewer, LeaderboardMember } from '../../member.model';
import { Subscription, interval } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/common/ui.service';
import { NumberFormatStyle } from '@angular/common';
import { MatSlideToggleChange, MatTableDataSource, TransitionCheckState } from '@angular/material';
import { StreamService } from '../stream.service';
import { MatDialog } from '@angular/material';
import { YesNoDialogComponent } from 'src/app/common/yesno-dialog/yesno-dialog.component';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-current-session',
  templateUrl: './current-session.component.html',
  styleUrls: ['./current-session.component.scss']
})
export class CurrentSessionComponent implements OnInit, OnDestroy {


  public session: StreamSession;

  public goal: StreamSessionGoal;
  public goalCollectedPct: number;

  public tipjar: Tipjar;
  public wallet: Wallet;
  public transactions: any[];
  public viewers: any[];

  public viewersDs: MatTableDataSource<Viewer>;
  public blockedDs: MatTableDataSource<MemberBlock>;

  public blocked: MemberBlock[];
  public currentMember: any;
  public leaderboard: LeaderboardMember[];

  public ppmUse: boolean;
  public ppmAmount: number;

  public runtimeHours: number;
  public runtimeMinutes: number;
  public runtimeSeconds: number;
  public runtimeDays: number;
  public showNumberOfTransaction: number;
  public clockHours: number;
  public clockMinutes: number;
  public timezone: string;

  private currentMemberSub: Subscription;
  private goalSub: Subscription;
  private tipjarSub: Subscription;
  private walletSub: Subscription;
  private clockSub: Subscription;
  private transactionsSub: Subscription;
  private viewersSub: Subscription;
  private blockedSub: Subscription;
  private leaderboardSub: Subscription;

  constructor(private db: AngularFirestore, private uiService: UIService, private ss: StreamService, private dialog: MatDialog) { }



  ngOnInit() {
    this.showNumberOfTransaction = 30;
    this.runtimeHours = 0;
    this.runtimeMinutes = 0;
    this.clockHours = 0;
    this.clockMinutes = 0;

    this.currentMemberSub = this.db.doc(`members/${localStorage.getItem('uid')}`)
    .valueChanges()
    .subscribe( (data: any) => {
      this.currentMember = data;
      this.session = {...data.session, created: data.session.created.toDate()   };
      localStorage.setItem('own-session-id', this.session.id.toString());


      this.leaderboardSub = this.db.collection(`session-leaderboard/${this.session.id}/leaderboard`,
      ref => ref.orderBy('amt', 'desc').limit(10))
      .snapshotChanges()
      .pipe(
        map( result => {
          return result.map( item => {
            return {
              uid: item.payload.doc.id,
              ...item.payload.doc.data()
            };
          });
        }))
      .subscribe( (lb: LeaderboardMember[]) => {
        this.leaderboard = lb;
      });

      this.blockedSub = this.db.collection('model-blocked', ref => ref.where('mid', '==', localStorage.getItem('uid')))
      .snapshotChanges()
      .pipe(
        map( result => {
          return result.map( item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            };
          });
        })
      )
      .subscribe( (blockdata: MemberBlock[]) => {
        this.blocked = blockdata;

        if (blockdata) {
          this.blockedDs = new MatTableDataSource<MemberBlock>(blockdata);
        } else {
          this.blockedDs = null;
        }

      });

      this.viewersSub = this.db.collection('session-viewers', ref => ref.where('sid', '==' , this.session.id))
        .snapshotChanges()
        .pipe(
          map( result => {
            return result.map( item => {
              return {
                id: item.payload.doc.id,
                ...item.payload.doc.data()
              };
            });
          }))
          .subscribe( (viewersdata: Viewer[]) => {
            this.viewers = viewersdata;
            if (viewersdata) {
              this.viewersDs = new MatTableDataSource<Viewer>(viewersdata);
            } else {
              this.viewersDs = null;
            }

        });

      this.transactionsSub =
        this.db.collection('session-tips', ref => ref
                .where('sid', '==' , this.session.id)
                .where('ppm', '==' , false)
                .orderBy('dt')
                .limit(this.showNumberOfTransaction))
        .valueChanges()
        .subscribe( (items: any) => {
            this.transactions = items;
          });
    });

    this.goalSub = this.db.doc(`session-goals/${localStorage.getItem('uid')}`)
    .valueChanges()
    .subscribe( (data: StreamSessionGoal) => {

      this.goal = data;

      if (this.goal) {
        this.goalCollectedPct = Number(((this.goal.collected / this.goal.amount) * 100).toFixed(1));
      } else {
        this.goalCollectedPct = 0;
      }

    });

    this.tipjarSub = this.db.doc(`model-tipjars/${localStorage.getItem('uid')}`)
    .valueChanges()
    .subscribe( (data: Tipjar) => {
      this.tipjar = data;
    });

    this.walletSub = this.db.doc(`member-wallets/${localStorage.getItem('uid')}`)
    .valueChanges()
    .subscribe( (data: Wallet) => {
      this.wallet = data;
    });


    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const source = interval(1000);
    this.clockSub = source.subscribe(value => {
      if ( this.session ) {
          this.calculateTimes();
      }
    });

  }

  private calculateTimes() {

    const now = new Date();
    this.clockHours = now.getHours();
    this.clockMinutes = now.getMinutes();

    const runtime_ms = this.session.created.getTime();
    const now_ms = now.getTime();

    let difference_ms = now_ms - runtime_ms;

    difference_ms = difference_ms / 1000;
    this.runtimeSeconds = Math.floor(difference_ms % 60);

    difference_ms = difference_ms / 60;
    this.runtimeMinutes = Math.floor(difference_ms % 60);

    difference_ms = difference_ms / 60;
    this.runtimeHours = Math.floor(difference_ms % 24);

    this.runtimeDays = Math.floor(difference_ms / 24);
  }

  onAccess(form: NgForm) {

    this.session.accessType = form.value.accessType;
    this.session.minLevel = form.value.minLevel ? form.value.minLevel : 0;
    this.session.modified = new Date();

    this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
    this.uiService.showSnackbar('Access type settings saved', null, 3000);
  }


  flagPpm(usePpm) {

    if (usePpm === false) {
      this.session.usePpm = false;
      this.session.ppmAmount = 0;
      this.session.inclPpmInGoal = false;
      this.session.inclPpmInLeaderboard = false;
      this.session.modified = new Date();
      this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
      this.uiService.showSnackbar('Pay-Per-Minute settings saved', null, 3000);
    } else {
      this.session.usePpm = true;
    }
  }



  flagGoal(useGoal) {
    if (useGoal === true) {
      this.db.doc(`session-goals/${localStorage.getItem('uid')}`)
      .set({
          amount: 0,
          collected: 0,
          descr: '',
          doneFx: 'None'
          });

    } else {
      this.db.doc(`session-goals/${localStorage.getItem('uid')}`).delete();

    }
    this.session.useGoal = false; // onlu the onGoal operation can set this to true
    this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
  }

  onGeneral(form: NgForm) {

    this.session.minTipAmount = form.value.minTipAmount;
    this.session.modelName = form.value.modelName;
    this.session.title = form.value.title;
    this.session.modified = new Date();
    this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
    this.uiService.showSnackbar('General settings saved', null, 3000);

  }

  onGoal(form: NgForm) {

    const useGoal = form.value.useGoal ? true : false;
    const amount = form.value.amount ? form.value.amount : 0;
    const descr = form.value.descr;
    const doneFx = form.value.doneFx;

      if (useGoal === false) {
          this.db.doc(`session-goals/${localStorage.getItem('uid')}`).delete();
      }

      if (useGoal === true)  {

         if ( this.goal === null || this.goal === undefined) { // new
          this.db.doc(`session-goals/${localStorage.getItem('uid')}`)
          .set({
              amount: amount,
              collected: 0,
              descr: descr,
              doneFx: doneFx
              });
        } else { // change existing
          this.goal.amount = amount;
          this.goal.descr = descr;
          this.goal.doneFx = doneFx;
          this.goal.collected = 0 ;
          this.db.doc(`session-goals/${localStorage.getItem('uid')}`).update( this.goal);
        }
      }

      this.session.useGoal = useGoal;
      this.session.modified = new Date();
      this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
      this.uiService.showSnackbar('Goal settings saved', null, 3000);
  }





  onPpm(form: NgForm) {

    const usePpm = form.value.usePpm ? true : false;
    const inclPpmInGoal = form.value.inclPpmInGoal ? true : false;
    const inclPpmInLeaderboard = form.value.inclPpmInLeaderboard ? true : false;
    const amount = form.value.amount ? form.value.amount : 0;

    if (usePpm && amount > 0) {
      this.session.usePpm = true;
      this.session.ppmAmount = amount ;
      this.session.inclPpmInGoal = inclPpmInGoal;
      this.session.inclPpmInLeaderboard = inclPpmInLeaderboard;
    } else {
      this.session.usePpm = false;
      this.session.ppmAmount = 0;
      this.session.inclPpmInGoal = false;
      this.session.inclPpmInLeaderboard = false;
    }

    this.session.modified = new Date();
    this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
    this.uiService.showSnackbar('Pay-Per-Minute settings saved', null, 3000);
  }

  saveSession(scope: string) {

      // TBD: log change

      this.session.modified = new Date();
      this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
      console.log(`change to: [${scope}] saved`);
      this.uiService.showSnackbar('Setings Saved', null, 2000);
  }



  stopSession() {


    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      disableClose: true,
      autoFocus: true,
      closeOnNavigation: false,
      data: {
         title: 'Stop live session ?',
         content: 'Please confirm that you want to stop streaming this live session',
         yesLabel: 'I Confirm',
         noLabel: 'No, keep session open'
        }
    });

    dialogRef.afterClosed().subscribe( result => {
      if (result) {
        this.db.collection('members').doc(localStorage.getItem('uid')).update({session: null})
        .then( () => {

          this.db.doc(`session-goals/${localStorage.getItem('uid')}`).delete();
          this.goal = null;

          console.log('session stopped');
          localStorage.removeItem('own-session-id');

          this.session = null;
          this.uiService.showSnackbar('Session stopped', null, 3000);
        })
        .catch(error  => {
            this.uiService.showSnackbarError(error);
        });
      }
    });


  }

  getNewStreamKey() {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      disableClose: true,
      autoFocus: true,
      closeOnNavigation: false,
      data: {
         title: 'Renew stream key?',
         content: 'Please confirm that you want a new key for the streaming service?',
         yesLabel: 'I Confirm',
         noLabel: 'No, keep existing stream key'
        }
    });

    dialogRef.afterClosed().subscribe( result => {
      if (result) {
        this.session.stream = this.ss.fetchNewStream();
        this.session.modified = new Date();
        this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
        console.log(`change to: [session.stream] saved`);
        this.uiService.showSnackbar('New stream key generated', null, 2000);
      }
    });
  }


  onViewerBlock(viewer: Viewer) {
    console.log('onViewerBlock:');
    console.log(viewer);

    const nme = viewer.nme;

    this.db.collection('model-blocked').add( { mid: localStorage.getItem('uid'), uid: viewer.id, nme: viewer.nme, dt: new Date() })
    .then( () => {
      this.uiService.showSnackbar(`viewer ${nme} blocked. user is kicked out of the session` , null, 7000);
    }).catch( error => {
      this.uiService.showSnackbarError(error);
    });
  }

  onUnBlock(user: MemberBlock) {
    const nme = user.nme;

    this.db.collection('model-blocked').doc(user.id).delete().then( () => {
      this.uiService.showSnackbar(`${nme} unblocked` , null, 3000);
    }).catch( error => {
      this.uiService.showSnackbarError(error);
    });
  }




  ngOnDestroy(): void {
    if (this.currentMemberSub) { this.currentMemberSub.unsubscribe(); }
    if (this.goalSub) { this.goalSub.unsubscribe(); }
    if (this.tipjarSub) { this.tipjarSub.unsubscribe(); }
    if (this.walletSub) {this.walletSub.unsubscribe(); }
    if (this.clockSub) {this.clockSub.unsubscribe(); }
    if (this.transactionsSub) {this.transactionsSub.unsubscribe(); }
    if (this.viewersSub) {this.viewersSub.unsubscribe(); }
    if (this.blockedSub) {this.blockedSub.unsubscribe(); }
    if (this.leaderboardSub) { this.leaderboardSub.unsubscribe(); }
  }

}
