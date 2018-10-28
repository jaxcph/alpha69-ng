import { Component, OnInit, OnDestroy } from '@angular/core';
import { LovenseService } from './lovense.service';
import { Subscription } from 'rxjs';
import { LovenseToy } from './lovense.model';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member, StreamSession } from 'src/app/member/member.model';

@Component({
  selector: 'app-lovense',
  templateUrl: './lovense.component.html',
  styleUrls: ['./lovense.component.css']
})
export class LovenseComponent implements OnInit, OnDestroy {

  public toys: LovenseToy[] = [];
  public sid: number;
  public member: Member;
  public session: StreamSession;

  private subs$: Subscription[] = [];
  constructor(private lovenseService: LovenseService, private db: AngularFirestore) { }

  ngOnInit() {
    this.subs$.push(
      this.db.doc(`members/${localStorage.getItem('uid')}`)
    .valueChanges()
    .subscribe( (data: any) => {
      this.member = data;
      this.session = {...data.session, created: data.session.created.toDate()} ;

      this.subs$.push(
        this.db.collection('session-toys', ref => ref.where('sid', '==', this.session.id))
      .valueChanges()
      .subscribe( (ltdata: LovenseToy[]) => {
        this.toys = ltdata;
        console.log(ltdata);
       }));

      }));


  }

  onScan() {
    this.getToys();
  }

  private getToys() {
    this.subs$.push(

     this.lovenseService.getToys().subscribe( data => {
      this.toys = [];
      const apis = Object.keys(data).map(e => data[e]);
      for (const api of apis) {

        const apiToys = Object.keys(api.toys).map(e => api.toys[e]);
        if (apiToys.length > 0) {
          for (const at of apiToys) {
            const t: LovenseToy = {
              did: at.id,
              sid: this.session.id,
              name: at.name,
              nickName: at.nickName,
              status: at.status,
              domain: api.domain,
              httpPort: api.httpPort,
              httpsPort: api.httpsPort,
              wsPort: api.wsPort,
              wwsPort: api.wssPort,
              platform: api.platform,
              appVersion: api.appVersion};
            this.db.collection('session-toys').doc(t.did).set(t);
          }
        }
      }
     })
    );
  }


  ngOnDestroy(): void {
    // unsubcribe all the subscriptions
    if (this.subs$) {
      for (const s of this.subs$) {
        if (s) {s.unsubscribe(); }
      }
    }

  }
}
