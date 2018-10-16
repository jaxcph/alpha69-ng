import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { UIService } from 'src/app/common/ui.service';
import { Router } from '@angular/router';
import { Member } from '../../member.model';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.css']
})
export class NewSessionComponent implements OnInit, OnDestroy {
  
  currentMember:Member;
  private currentMemberSub: Subscription;

  constructor(private db: AngularFirestore, private uiService: UIService, private router: Router) {

   }

  ngOnInit() {
    this.currentMemberSub=this.db.doc(`members/${localStorage.getItem('uid')}`).valueChanges().subscribe( (data: Member) => {
      this.currentMember = data;
    });  
  }

  ngOnDestroy(): void {
    this.currentMemberSub.unsubscribe();
  }

  onSubmit(form: NgForm) {
      console.log(form);

      this.db.doc(`members/${localStorage.getItem('uid')}`).update( {
        session : {
          title: form.value.title,
          modelName: form.value.modelName,
          accessType: form.value.accessType,
          minLevel: (form.value.minLevel) ? form.value.minLevel : 0,
          usePpm: form.value.ppmUse?true:false,
          ppm:(form.value.ppmUse === true) ? {amount: form.value.ppmAmount}: null,
          useGoal: form.value.goalUse?true:false,
          goal: (form.value.goalUse === true) ? {
            amount: form.value.goalAmount,
            left: form.value.goalAmount,
            descr: form.value.goalDescription,
            doneFx: form.value.goalDoneFx
          } : null ,
          isStreaming: false,
          created: new Date()
        }
      }).then( () => {

        this.uiService.showSnackbar('new session setup', null, 3000);
        this.router.navigate(['member/session']);
      }).catch( error => {
        this.uiService.showSnackbarError(error);
      });

  }

}
