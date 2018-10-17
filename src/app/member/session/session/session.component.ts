import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member, StreamSession } from '../../member.model';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit, OnDestroy {

  public isModel: boolean;
  public hasSession: boolean;

  private _memberSubscription: Subscription;
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    const path = `members/${localStorage.getItem('uid')}`;
    this._memberSubscription = this.db.doc(path)
    .valueChanges()
    .subscribe( (member: Member) => {
      this.isModel = member.isModel ? true : false;
      this.hasSession = (member.session) ? true : false;

    //  console.log(member);
    //  console.log('is live: ' + this.hasSession);
    //  console.log('is model:' + this.isModel);
      });
  }

  ngOnDestroy(): void {
    this._memberSubscription.unsubscribe();
  }
}
