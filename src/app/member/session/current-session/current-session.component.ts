import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member, StreamSession, StreamSessionGoal, Tipjar, Wallet, MemberBlock, Viewer } from '../../member.model';
import { Subscription, interval } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/common/ui.service';
import { NumberFormatStyle } from '@angular/common';
import { MatSlideToggleChange, MatTableDataSource } from '@angular/material';
import { StreamService } from '../stream.service';
import { MatDialog } from '@angular/material';
import { YesNoDialogComponent } from 'src/app/common/yesno-dialog/yesno-dialog.component';
import { map } from 'rxjs/operators';


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

  saveSession(scope: string) {

      if (scope === 'session.usePpm' && (this.session.ppm === null || this.session.ppm === undefined )) {
           this.session.ppm = {amount: 1};
      }

      if (scope === 'session.useGoal') {

        if (this.session.useGoal === false) {
            this.db.doc(`session-goals/${localStorage.getItem('uid')}`).delete();
         //   this.goal = null;
        }

        if (this.session.useGoal === true && (this.goal === null || this.goal === undefined)) {
            this.db.doc(`session-goals/${localStorage.getItem('uid')}`)
            .set({
                amount: 1000,
                collected: 0,
                descr: '',
                doneFx: 'None'
                });
        }
      }

      if ( (scope === 'goal.amount' || scope === 'goal.descr' || scope === 'goal.doneFx') && (this.goal) ) {

        if (scope === 'goal.amount' ) { this.goal.collected = 0; }

        this.db.doc(`session-goals/${localStorage.getItem('uid')}`).update( this.goal);
      }

      // TBD: log change

      this.session.modified = new Date();
      this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
      console.log(`change to: [${scope}] saved`);
      this.uiService.showSnackbar('Setings Saved', null, 2000);
  }



  stopSession() {


    const dialogRef = this.dialog.open(YesNoDialogComponent, {
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

  }

}
