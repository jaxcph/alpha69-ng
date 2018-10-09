import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { auth, User } from 'firebase';
import { Member } from '../member.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public user: any = null;
  private _userSub: Subscription;

  constructor(private authService: AuthService, private db: AngularFirestore ) { }

  ngOnInit() {
    this._userSub = this.db.doc(`users/${this.authService.getUserId()}`).valueChanges()
    .subscribe( data => {
       this.user = data;
       console.log(data);
    });
  }

  ngOnDestroy(): void {
    this._userSub.unsubscribe();
  }

}
