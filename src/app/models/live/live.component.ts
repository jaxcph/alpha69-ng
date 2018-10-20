import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Member } from 'src/app/member/member.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, OnDestroy {

  public model: Member;
  public member: Member;


  public tipjar: any;
  public wallet:  any;
  public goal: any;

  private subs$: Subscription[] = [];


  constructor(private db: AngularFirestore, private router: Router, private auth: AuthService) { }

  ngOnInit() {

    const uid = this.auth.getUserId();
    const mid = localStorage.getItem('mid');

    this.subs$.push(
      this.db.doc(`members/${uid}`)
      .valueChanges()
      .subscribe( (data: Member) => {
         this.member = data;
         console.log('MEMBER ' + uid + ' =');
         console.log(this.member);
         })
    );

    this.subs$.push(
      this.db.doc(`members/${mid}`)
      .valueChanges()
      .subscribe( (data: Member) => {
         this.model = data;
         console.log('MODEL ' + mid + ' =');
         console.log(this.model);
         })
    );

    this.subs$.push(
      this.db.doc(`member-wallets/${uid}`)
      .valueChanges()
      .subscribe( (data: any) => {
         this.wallet = data;
         console.log('WALLET=');
         console.log(this.wallet);
         })
    );

    this.subs$.push(
      this.db.doc(`model-tipjars/${mid}`)
      .valueChanges()
      .subscribe( (data: any) => {
         this.tipjar = data;
         console.log('TIPJAR=');
         console.log(this.tipjar);
         })
    );

    this.subs$.push(
      this.db.doc(`session-goals/${mid}`)
      .valueChanges()
      .subscribe( (data: any) => {
         this.goal = data;
         console.log('GOAL=');
         console.log(this.goal);
         })
    );

  }

  ngOnDestroy(): void {
    if (this.subs$) {
      for (const s of this.subs$) {
        s.unsubscribe();
      }
      this.subs$ = null;
    }
  }

}
