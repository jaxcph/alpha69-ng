import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { UIService } from 'src/app/common/ui.service';
import { Router } from '@angular/router';
import { Member } from '../../member.model';
import { StreamService } from '../stream.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.css']
})
export class NewSessionComponent implements OnInit, OnDestroy {
  currentMember: Member;
  private currentMemberSub: Subscription;

  constructor(private db: AngularFirestore, private uiService: UIService, private router: Router, private stream: StreamService) {

   }

  ngOnInit() {
    this.currentMemberSub = this.db.doc(`members/${localStorage.getItem('uid')}`).valueChanges().subscribe( (data: Member) => {
      this.currentMember = data;
    });
  }

  ngOnDestroy(): void {
    this.currentMemberSub.unsubscribe();
  }

  onSubmit(form: NgForm) {
      console.log(`#0: ${form.value.goalUse}`);

      const hasGoal = form.value.goalUse ? true : false;
      this.db.doc(`members/${localStorage.getItem('uid')}`).update( {
        session : {
          id: new Date().getTime(),
          title: form.value.title,
          modelName: form.value.modelName,
          accessType: form.value.accessType,
          minLevel: (form.value.minLevel) ? form.value.minLevel : 0,
          usePpm: form.value.ppmUse ? true : false,
          ppm: (form.value.ppmUse === true) ? {amount: form.value.ppmAmount} : null,
          useGoal: hasGoal,
          stream: this.stream.fetchNewStream(),
          created: new Date(),
          agreedStream: form.value.agree ? true : false,
          minTipAmount: form.value.minTipAmount
        }
      }).catch( error => {
        this.uiService.showSnackbarError(error);
      });

      if (hasGoal) {
        this.db.doc(`session-goals/${localStorage.getItem('uid')}`).set({
          amount: form.value.goalAmount,
          collected: 0,
          descr: form.value.goalDescription,
          doneFx: form.value.goalDoneFx
        })
        .catch( error => {
          this.uiService.showSnackbarError(error);
        });
     }

     // this.db.collection('model-tipjars').doc(localStorage.getItem('uid')).snapshotChanges().take(1).do(d => d.payload.exists);


      this.uiService.showSnackbar('new session setup', null, 3000);
      this.router.navigate(['member/session']);

  }

}
