import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Member, MemberBlock } from '../member/member.model';
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
  private myBlocks: MemberBlock[];
  private myBlocksSub: Subscription;


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

        this.myBlocksSub = this.db.collection('model-blocked', ref => ref.where('uid', '==', localStorage.getItem('uid')))
        .valueChanges()
        .subscribe( (blockdata: MemberBlock[]) => {
          this.myBlocks = blockdata;
        });


      }, error => {
        console.error(error);
      });


    }

  navLogin() {
    this.router.navigate(['/login']);
  }

  analyzeJoinOption(m: Member): string {

    if (m.session) {

      if (this.isBlocked(m)) {
        return 'blocked';
      } else {
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
      }
    } else {
      return 'none';
    }
  }

  isBlocked(m: Member) {

    if (this.myBlocks) {
      for (const block of this.myBlocks) {
         if ( block.mid === m.id ) {
           return true;
         }
      }
    } else {return false; }
  }

  onBlocked(m: Member)  {

    // find block reason
    let reason: string;
    if (this.myBlocks) {
      for (const block of this.myBlocks) {
         if ( block.mid === m.id ) {
            reason = block.why;
         }
      }
    }

    // show messagebox
    const dialogRef = this.dialog.open(OKDialogComponent, {
      data: {
         title: 'Information',
         content: `${m.session.modelName} has blocked your access, with the reason "${reason}"`,
         okLabel: 'OK'
        }
    });
  }

  onJoin(m: Member) {


    if (m.session.usePpm && m.session.ppm && m.session.ppm.amount > 0) {

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
    if ( this.myBlocksSub) { this.myBlocksSub.unsubscribe(); }

  }

}
