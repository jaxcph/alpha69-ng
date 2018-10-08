import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Member } from './member.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { UIService } from '../common/ui.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public changed = new Subject<boolean>();
  private isLoggedin = false;

  private _user: firebase.User;
  private _member: Member;


  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private uiService: UIService) {
  }


  initAuthListener() {

    this.afAuth.authState.subscribe( user => {
      if (user) {
        this._user = user;
        this.uiService.showSnackbar('Authenticated', null, 3000);
        this.isLoggedin = true;
        this.changed.next(true);
        this.router.navigate(['/models']);
      } else {
        this._user = null;
        this._member = null;
        this.isLoggedin = false;
        this.changed.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

  signUp(email: string, password: string, displayName: string, isModel: boolean ) {
    this.uiService.loadingStateChange.next(true);
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then( (userCredential) => {

        const data = {
          email: email,
          displayName: displayName,
          level: 0,
          score: 0,
          isModel: isModel,
          created: new Date()
        };
        this.db.doc(`users/${userCredential.user.uid}`).set(data).then( () => {
          this.uiService.loadingStateChange.next(false);
          this._user = userCredential.user;
          this._member = {
              uid: userCredential.user.uid,
              email: email,
              displayName: displayName,
              level: data.level,
              score: data.score,
              isModel: isModel,
              created: data.created
          };
        })
        .catch( error => {
          this._member = null;
          this._user = null;
          this.uiService.loadingStateChange.next(false);
          this.uiService.showSnackbarError(error);
        });
    })
    .catch( error => {
      this._member = null;
      this._user = null;
      this.uiService.loadingStateChange.next(false);
      this.uiService.showSnackbarError(error);
      console.error(error);
    });
  }

  login(email: string, password: string) {

    this.uiService.loadingStateChange.next(true);
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then( userCredential => {
      this._user = userCredential.user;
      // TODO: load member from db
      this.uiService.loadingStateChange.next(false);
    })
    .catch( error => {
      this._member = null;
      this._user = null;
      this.uiService.loadingStateChange.next(false);
      this.uiService.showSnackbarError(error);
    });
  }

  logout() {
    this._member = null;
    this._user = null;
    this.afAuth.auth.signOut();
  }


  isAuth() {
    return this.isLoggedin;
  }

  getUser() {
    return {...this._user};
  }
  getMember() {
    return {...this._member};
  }


}
