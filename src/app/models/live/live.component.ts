import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Member } from 'src/app/member/member.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, OnDestroy {

  public model: Member;
  public member: Member;



  public wallet:  any;
  public goal: any;
  public tipjarShade: any;
  public goalShade: any;
  public transactions: any[];

  private subs$: Subscription[] = [];


  constructor(private db: AngularFirestore, private router: Router, private auth: AuthService) { }





  onTip(form: NgForm) {

    console.log(form);


    // TO DO RUN IN TRANSACTION perhaps in FUNCTION
    // in transaction :
    //  1 check wallet balance,
    //  2 reduce wallet
    //  2 increase tipjar
    //  3 check for goal, and post to goal
    //  4 write transaction
    // end transaction
    // 5 delay 500 msec

    const uid = localStorage.getItem('uid');
    const mid = localStorage.getItem('mid');

    // set new balance
    const newBalance = this.wallet.balance - form.value.amount;
    this.db.doc(`member-wallets/${uid}`).update({balance: newBalance });

    // set the users shade on the tipjar
    const tipjarShadeAmount = this.tipjarShade ? this.tipjarShade.amount + form.value.amount : form.value.amount;
    if (this.tipjarShade) {
      this.db.doc(`model-tipjars/${mid}/tippers/${uid}`).update({amount: tipjarShadeAmount});
    } else {
      this.db.doc(`model-tipjars/${mid}/tippers/${uid}`).set({amount: tipjarShadeAmount});
    }

    // set the users shade on the goal, if there is goal for this session
    if (this.goal) {
      const goalShadeAmount = this.goalShade ? this.goalShade.amount + form.value.amount : form.value.amount;
      if (this.goalShade) {
        this.db.doc(`session-goals/${mid}/tippers/${uid}`).update({amount: goalShadeAmount});
      } else {
        this.db.doc(`session-goals/${mid}/tippers/${uid}`).set({amount: goalShadeAmount});
      }
    }

    // transactions
    if (form.value.message) {
      this.db.collection('session-tips').add( {
            dt: new Date(),
            sid: this.model.session.id,
            amt: form.value.amount,
            uid: uid,
            nme: this.member.displayName,
            msg: form.value.message
          });
    } else {
        this.db.collection('session-tips').add( {
            dt: new Date(),
            sid: this.model.session.id,
            amt: form.value.amount,
            uid: uid,
            nme: this.member.displayName
          });
    }



  }



  ngOnInit() {

    const uid = localStorage.getItem('uid');
    const mid = localStorage.getItem('mid');

    // this user
    this.subs$.push(
      this.db.doc(`members/${uid}`)
      .valueChanges()
      .subscribe( (data: Member) => {
         this.member = data;
         console.log('MEMBER ' + uid + ' =');
         console.log(this.member);
         })
    );

    // model
    this.subs$.push(
      this.db.doc(`members/${mid}`)
      .valueChanges()
      .subscribe( (data: Member) => {
         this.model = data;
         console.log('MODEL ' + mid + ' =');
         console.log(this.model);

          // transactions, get last 100
          this.subs$.push(
            this.db.collection('session-tips', ref => ref
                    .where('sid', '==' , this.model.session.id)
                    .orderBy('dt')
                    .limit(100))
            .valueChanges()
            .subscribe( (items: any) => {
                console.log('TRANSACTION=');
                console.log(items);
                this.transactions = items;
              })
          );
         })
    );

    // users personal wallet
    this.subs$.push(
      this.db.doc(`member-wallets/${uid}`)
      .valueChanges()
      .subscribe( (data: any) => {
         this.wallet = data;
         console.log('WALLET=');
         console.log(this.wallet);
         })
    );

    // users personal wallet
    this.subs$.push(
      this.db.doc(`session-goals/${mid}`)
      .valueChanges()
      .subscribe( (data: any) => {
          this.goal = data;
          console.log('GOAL=');
          console.log(this.goal);
          })
    );

    // tipjar shade
    this.subs$.push(
      this.db.doc(`model-tipjars/${mid}/tippers/${uid}`)
      .valueChanges()
      .subscribe( (data: any) => {
         this.tipjarShade = data;
         console.log('TIPJAR-SHADE=');
         console.log(this.tipjarShade);
         })
    );

    // goal shade
    this.subs$.push(
      this.db.doc(`session-goals/${mid}/tippers/${uid}`)
      .valueChanges()
      .subscribe( (data: any) => {
         this.goalShade = data;
         console.log('GOAL-SHADE=');
         console.log(this.goalShade);
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
