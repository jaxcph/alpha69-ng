import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Member } from './member.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public currentMember: Observable<Member>;

  constructor(private db: AngularFirestore, private authService: AuthService) { }

  /*getCurrent() {
    // .doc(`members/${this.authService.getUser().uid}`)
    this.db.collection('members')
    .snapshotChanges()
    .pipe(
      map( result => {
        return result.map ( doc => {

        })
      })
    );
    } */

  getModels() {

  }

  getAll() {

  }

  getByDisplayName(displayName: string) {

  }
}
