import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { UIService } from 'src/app/common/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.css']
})
export class NewSessionComponent implements OnInit {

  constructor(private db: AngularFirestore, private uiService: UIService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
      console.log(form);

      this.db.doc(`members/${localStorage.getItem('uid')}`).update( {
        session : {
          title: form.value.title,
          accessType: form.value.accessType,
          minLevel: (form.value.minLevel) ? form.value.minLevel : 0,
          ppmUse: (form.value.ppmUse) ? true : false,
          ppmAmount: form.value.ppmAmount,
          goal: (form.value.goalUse === true) ? {
            amount: form.value.goalAmount,
            left: form.value.goalAmount,
            descr: form.value.goalDescription,
            doneFx: form.value.goalDoneFx
          } : {} ,
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
