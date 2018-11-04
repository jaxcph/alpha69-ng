import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LovenseToy, LovenseToyCommandRule, LovensenToyEvent } from '../lovense/lovense.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { UIService } from 'src/app/common/ui.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lovense-config',
  templateUrl: './lovense-config.component.html',
  styleUrls: ['./lovense-config.component.css']
})
export class LovenseConfigComponent implements OnInit, OnDestroy {


  constructor(private router: Router,
     private route: ActivatedRoute,
     private db: AngularFirestore,
     private uiService: UIService) { }


  public toy: LovenseToy;
  public rules: LovenseToyCommandRule[] = [];
  private toyid: string;
  private sid: number;
  private uid: string;

  private rulesSub: Subscription;
  ngOnInit() {

    this.toyid = this.route.snapshot.params.toyid;
    this.sid = Number(localStorage.getItem('own-session-id'));
    this.uid = localStorage.getItem('uid');

    const toys: LovenseToy[] = Array.from(JSON.parse(localStorage.getItem('toys')));

    for (let i = 0; i < toys.length; i++) {
        if (toys[i].did === this.toyid) {
          this.toy = {...toys[i]};
        }
    }

    this.rulesSub = this.db.collection('lovense-toy-rules', ref => ref.where('did', '==', this.route.snapshot.params.toyid))
    .snapshotChanges()
        .pipe(
          map( result => {
            return result.map( item => {
              return {
                id: item.payload.doc.id,
                ...item.payload.doc.data()
              };
            });
          }))
          .subscribe( (rulesdata: any[]) => {
            this.rules = rulesdata;
        });

  }

  onRemoveRule(id) {
    this.db.collection('lovense-toy-rules').doc(id).delete();
  }

  onTestRule(rule: LovenseToyCommandRule) {
       this.db.collection('session-toy-events').add( {
                  sid: this.sid,
                  did: rule.did,
                  act: rule.action,
                  val: rule.value,
                  secs: rule.seconds,
                  nme: 'model-test',
                  uid: rule.uid,
                  amt: 0,
                  ts: new Date().getTime()
              });
 //   this.uiService.showSnackbar('Testing', null, (rule.seconds * 1000));
  }

  onSubmitAddNew(form: NgForm) {
      this.db.collection('lovense-toy-rules').add({
        uid: this.uid,
        did: this.toyid,
        action: form.value.action,
        tip: form.value.tip,
        value: form.value.value,
        seconds: form.value.seconds
      });

      this.uiService.showSnackbar('Rule added', null, 3000);
  }

  ngOnDestroy(): void {

    if (this.rulesSub) { this.rulesSub.unsubscribe(); }
  }

}
