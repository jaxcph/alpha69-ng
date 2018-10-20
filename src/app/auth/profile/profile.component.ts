import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { auth, User } from 'firebase';
import { Member } from '../../member/member.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public currentMember: Member = null;
  private currrentMemberSub: Subscription;

  constructor(private authService: AuthService, private db: AngularFirestore ) { }

  ngOnInit() {
    this.currrentMemberSub = this.db.doc(`members/${this.authService.getUserId()}`).valueChanges()
    .subscribe( (data: Member) => {
       this.currentMember = data;
    });
  }

  ngOnDestroy(): void {
    if ( this.currrentMemberSub ) { this.currrentMemberSub.unsubscribe(); }
  }

}
