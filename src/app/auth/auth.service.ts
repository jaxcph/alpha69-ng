import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Member } from '../member/member.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { UIService } from '../common/ui.service';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public changed = new Subject<boolean>();
  private isLoggedin = false;

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private uiService: UIService) {
  }


  initAuthListener() {
    this.afAuth.authState.subscribe( user => {
      if (user) {
        localStorage.setItem('uid', user.uid);
        this.uiService.showSnackbar('Authenticated', null, 3000);
        this.isLoggedin = true;
        this.changed.next(true);
        this.router.navigate(['/models']);
      } else {
        localStorage.removeItem('uid');
        this.isLoggedin = false;
        this.changed.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

 /* loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( (userCredential) => {


      // this.db.doc(`members/${userCredential.user.uid}`).ge

    /*  const data = {
        displayName: displayName,
        level: 0,
        agree18yo: true,
        agreeMember: true,
        isModel: isModel,
        created: new Date(),
        model: (isModel) ? {
          realname: realfullname,
          dob: dob,
          aboutMe: aboutMe,
          avatarImg: avatarImg,
          listingImg: listingImg,
          agreeModel: true
        } : null
      };*/

      // check if has member record in firestore
   // });

//  }

  signUp(email: string, password: string,
     displayName: string, isModel: boolean,
     dob: Date, realfullname: string, aboutMe:
     string, avatarImg: string, listingImg: string) {
    this.uiService.loadingStateChange.next(true);

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)

    .then( (userCredential) => {

        const data = {
          displayName: displayName,
          level: 0,
          agree18yo: true,
          agreeMember: true,
          isModel: isModel,
          created: new Date(),
          model: (isModel) ? {
            realname: realfullname,
            dob: dob,
            aboutMe: aboutMe,
            avatarImg: avatarImg,
            listingImg: listingImg,
            agreeModel: true
          } : null
        };

        this.db.doc(`members/${userCredential.user.uid}`).set(data).then( () => {
          this.uiService.loadingStateChange.next(false);
              })
        .catch( error => {
          this.uiService.loadingStateChange.next(false);
          this.uiService.showSnackbarError(error);
        });

        this.db.doc(`member-wallets/${userCredential.user.uid}`).set({ balance: 0})
        .catch(error => {
          this.uiService.showSnackbarError(error);
        });

        if (isModel) {
          this.db.doc(`model-tipjars/${userCredential.user.uid}`).set({ balance: 0})
          .catch(error => {
            this.uiService.showSnackbarError(error);
          });
        }

    })
    .catch( error => {
      this.uiService.loadingStateChange.next(false);
      this.uiService.showSnackbarError(error);
    });
  }

  login(email: string, password: string) {

    this.uiService.loadingStateChange.next(true);
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then( userCredential => {
      // TODO: load member from db
      this.uiService.loadingStateChange.next(false);
    })
    .catch( error => {
      this.uiService.loadingStateChange.next(false);
      this.uiService.showSnackbarError(error);
    });
  }

  logout() {
    localStorage.removeItem('uid');
    localStorage.removeItem('mid');
    this.afAuth.auth.signOut();
  }


  isAuth() {
    return this.isLoggedin;
  }

  getUser() {
    return {...this.afAuth.auth.currentUser};
  }

  getUserId() {
    return this.afAuth.auth.currentUser.uid;
  }


}
