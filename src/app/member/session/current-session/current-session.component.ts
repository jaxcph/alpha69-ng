import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member, StreamSession, StreamSessionGoal, StreamSessionPPM } from '../../member.model';
import { Subscription } from 'rxjs';
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
  styleUrls: ['./current-session.component.css']
})
export class CurrentSessionComponent implements OnInit, OnDestroy {



  session: StreamSession;
  private currentMemberSub: Subscription;


  public ppmUse: boolean;
  public ppmAmount: number;

  constructor(private db: AngularFirestore, private uiService: UIService, private ss: StreamService, private dialog: MatDialog) { }

  ngOnInit() {
    this.currentMemberSub = this.db.doc(`members/${localStorage.getItem('uid')}`).valueChanges().subscribe( (data: Member) => {
      this.session = data.session;

    });
  }

  ngOnDestroy(): void {
    this.currentMemberSub.unsubscribe();
  }


  saveSession(scope: string) {

      if (scope === 'session.usePpm' && (this.session.ppm === null || this.session.ppm === undefined )) {
           this.session.ppm = {amount: 1};
      }

      if (scope === 'session.useGoal' && (this.session.goal === null || this.session.goal === undefined )) {
          this.session.goal = {
              amount: 1000,
              descr:  '',
              doneFx: 'None',
              left: 0
          };
      }

      // TBD: log change
      // session.modelName
      // session.titles

      this.session.modified = new Date();
      this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
      console.log(`change to: [${scope}] saved`);
      console.log(this.session);
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
        console.log(this.session);
        this.uiService.showSnackbar('New stream key generated', null, 2000);
      }
    });
  }
}
