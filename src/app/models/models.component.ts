import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Member } from '../member/member.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { OKDialogComponent } from '../common/ok-dialog/ok-dialog.component';
import { YesNoDialogComponent } from '../common/yesno-dialog/yesno-dialog.component';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit, OnDestroy {

  public models: Member[] = [];
  public currentMember: Member;

  private modelsSub: Subscription;
  private currentMemberSub: Subscription;

  constructor(private db: AngularFirestore, private auth: AuthService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {

    localStorage.removeItem('mid');
    if (localStorage.getItem('uid')) {
      this.currentMemberSub = this.db.doc(`members/${localStorage.getItem('uid')}`)
      .valueChanges()
      .subscribe( (data: Member) => {this.currentMember = data; });
    }

    this.modelsSub = this.db.collection('members', ref => ref.where('isModel', '==', true))
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
      .subscribe( (data: Member[]) => {
        this.models = data;
        console.log(data);
      }, error => {
        console.error(error);
      });


    }

  navLogin() {
    this.router.navigate(['/login']);
  }

  analyzeJoinOption(m: Member): string {
    if (m.session) {
      if ( m.session.accessType === 'public') {
        return 'join';
      } else if (m.session.accessType === 'member' ) {
          return this.auth.isAuth() ? 'join' : 'login';
      } else if (m.session.accessType === 'onrequest') {
        return this.auth.isAuth() ? 'onrequest' : 'login';
      } else if (m.session.accessType === 'level') {
          if ( !this.auth.isAuth() ) {
            return 'login';
          } else {
            return this.currentMember.level >= m.session.minLevel ? 'join' : 'lowscore';
         }
      }
    } else {
      return 'none';
    }
  }

  onJoin(m: Member) {


    if (m.session.ppm && m.session.ppm.amount > 0) {

      const dialogRef = this.dialog.open(YesNoDialogComponent, {
        data: {
           title: 'CONFIRM! Pay-Per-Minute',
           content: `You will automatically be chardged ${m.session.ppm.amount} tokens per minut on this live session`,
           yesLabel: `I Accept to ${m.session.ppm.amount} token pay per minute`,
           noLabel: 'No, I will leave'
          }
      });

      dialogRef.afterClosed().subscribe( result => {
        if (result) {
            localStorage.setItem('mid', m.id);
            this.router.navigate(['/models/live']);
        }
      });
    } else {
      localStorage.setItem('mid', m.id);
      this.router.navigate(['/models/live']);
    }
  }

  onProfile(m: Member) {

  }

  onShare(m: Member) {

  }



  onLowlevel(m: Member) {
    const dialogRef = this.dialog.open(OKDialogComponent, {
      data: {
         title: 'Information',
         content: `${m.session.modelName} requires a minimum user-level
                  of ${m.session.minLevel} to join this session.
                  your user-level now is ${this.currentMember.level}`,
         okLabel: 'OK'
        }
    });
  }

  onRequestToJoin(m: Member) {
    const dialogRef = this.dialog.open(OKDialogComponent, {
      data: {
         title: 'Sorry!',
         content: 'The [Request to Join] feature was not been implemented yet',
         okLabel: ':('
        }
    });
  }


  ngOnDestroy(): void {
    if ( this.modelsSub ) { this.modelsSub.unsubscribe(); }
    if ( this.currentMemberSub) { this.currentMemberSub.unsubscribe(); }
  }

}
