import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member, StreamSession, StreamSessionGoal, StreamSessionPPM } from '../../member.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/common/ui.service';
import { NumberFormatStyle } from '@angular/common';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-current-session',
  templateUrl: './current-session.component.html',
  styleUrls: ['./current-session.component.css']
})
export class CurrentSessionComponent implements OnInit, OnDestroy {


  //model:Member;
  session:StreamSession;
  private currentMemberSub: Subscription;


  public ppmUse: boolean;
  public ppmAmount: number;

  constructor(private db: AngularFirestore,private uiService: UIService) { }

  ngOnInit() {
    this.currentMemberSub=this.db.doc(`members/${localStorage.getItem('uid')}`).valueChanges().subscribe( (data: Member) => {
      
      this.session=data.session;

      

      
    });  
  }

  ngOnDestroy(): void {
    this.currentMemberSub.unsubscribe();
  }


  saveSession(scope: string){
      
      if(scope==='session.usePpm' && (this.session.ppm===null || this.session.ppm===undefined )) {
           this.session.ppm = {amount:0};
      }
      
      if(scope==='session.useGoal' && (this.session.goal===null || this.session.goal===undefined )) {
          this.session.goal = { 
              amount:0,
              descr:'',
              doneFx:'None',
              left:0
          };
      }
      // TBD: log change


      this.session.modified = new Date();
      this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
      console.log(`change to: [${scope}] saved`);
      console.log(this.session);
  }

  onSubmit(form: NgForm) {
    console.log('UPDATE');
   //console.log(form);

  /*  console.log(this.currentMember);

    this.db.doc(`members/${localStorage.getItem('uid')}`).update( {
      session : {
        title: this.currentMember.session.title,
        modelName: this.currentMember.session.modelName,
        accessType: this.currentMember.session.accessType,
        minLevel: (this.currentMember.session.minLevel) ? this.currentMember.session.minLevel : 0,
        ppm:(this.currentMember.session.ppm === null) ? {amount: this.currentMember.session.ppm.amount}: null,
        goal: (this.currentMember.session.goal === null) ? {
          amount: this.currentMember.session.goal.amount,
          left: this.currentMember.session.goal.left,
          descr: this.currentMember.session.goal.descr,
          doneFx: this.currentMember.session.goal.doneFx
        } : null,
        modified: new Date()
      }
    }).then( () => {

      this.uiService.showSnackbar('Session settings updated', null, 3000);
  
    }).catch( error => {
      this.uiService.showSnackbarError(error);
    });*/

}


}
