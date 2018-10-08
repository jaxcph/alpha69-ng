import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Member } from './member.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public changed= new Subject<boolean>();
  private isLoggedin = false;
  private authState;
  



  constructor(private  router: Router, 
              private afAuth: AngularFireAuth,
              private db: AngularFirestore) {
  
  }


  initAuthListener() {
    this.afAuth.authState.subscribe( user => {
      if (user) {
        console.log(user.uid);
        this.authState = user;
        this.isLoggedin = true;
        this.changed.next(true);
        this.router.navigate(['/models']);

      } else {
        console.log('UN-AUTHENTICATED');
        this.isLoggedin = false;
        this.changed.next(false);
        this.router.navigate(['/login']);
      }
    });
  }
  
  signUp(email: string, password: string, displayName: string, isModel: boolean ) {
    
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then( (userCredential) => {
        console.log(userCredential);
        const data = {        
          email: email,
          displayName: displayName,
          level: 0,
          score: 0,
          isModel: isModel,
          created: new Date()
        }
        this.db.doc(`users/${userCredential.user.uid}`).set(data).catch( error =>{console.error(error);});
    })
    .catch( error => {
      console.error(error);
    });
  }

  getMember(){
    
  }
  
}
