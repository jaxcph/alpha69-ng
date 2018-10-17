import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member, StreamSession, StreamSessionGoal, Tipjar, Wallet } from '../../member.model';
import { Subscription, interval } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/common/ui.service';
import { NumberFormatStyle } from '@angular/common';
import { MatSlideToggleChange } from '@angular/material';
import { StreamService } from '../stream.service';
import { MatDialog } from '@angular/material';
import { YesNoDialogComponent } from 'src/app/common/yesno-dialog/yesno-dialog.component';


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

  public ppmUse: boolean;
  public ppmAmount: number;

  public runtimeHours: number;
  public runtimeMinutes: number;
  public runtimeSeconds: number;
  public runtimeDays: number;

  public clockHours: number;
  public clockMinutes: number;
  public timezone: string;


  private currentMemberSub: Subscription;
  private goalSub: Subscription;
  private tipjarSub: Subscription;
  private walletSub: Subscription;
  private clockSub: Subscription;


  constructor(private db: AngularFirestore, private uiService: UIService, private ss: StreamService, private dialog: MatDialog) { }

  ngOnInit() {

    this.runtimeHours = 0;
    this.runtimeMinutes = 0;
    this.clockHours = 0;
    this.clockMinutes = 0;

    this.currentMemberSub = this.db.doc(`members/${localStorage.getItem('uid')}`).valueChanges().subscribe( (data: any) => {
      this.session = {...data.session, created: data.session.created.toDate()   };
      console.log(this.session);
    });

    this.goalSub = this.db.doc(`session-goals/${localStorage.getItem('uid')}`)
    .valueChanges()
    .subscribe( (data: StreamSessionGoal) => {
      this.goal = data;
      this.goalCollectedPct = Number(((this.goal.collected / this.goal.amount) * 100).toFixed(1));

    });

    this.tipjarSub = this.db.doc(`model-tipjars/${localStorage.getItem('uid')}`)
    .valueChanges()
    .subscribe( (data: Tipjar) => {
      this.tipjar = data;
    });

    this.tipjarSub = this.db.doc(`member-wallets/${localStorage.getItem('uid')}`)
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
            this.goal = null;
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
    //  console.log(this.session);
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
  //      console.log(this.session);
        this.uiService.showSnackbar('New stream key generated', null, 2000);
      }
    });
  }






  ngOnDestroy(): void {
    this.currentMemberSub.unsubscribe();
    this.goalSub.unsubscribe();
    this.tipjarSub.unsubscribe();
    this.walletSub.unsubscribe();
    this.clockSub.unsubscribe();
  }

}
