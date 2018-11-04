import { Component, OnInit, OnDestroy } from '@angular/core';
import { LovenseService } from './lovense.service';
import { Subscription, Observable, timer } from 'rxjs';
import { LovenseToy } from './lovense.model';
import { map, timeInterval } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member, StreamSession } from 'src/app/member/member.model';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/common/ui.service';

@Component({
  selector: 'app-lovense',
  templateUrl: './lovense.component.html',
  styleUrls: ['./lovense.component.css']
})
export class LovenseComponent implements OnInit, OnDestroy {


  public toys: Map<string, LovenseToy>;
  public member: Member;
  public session: StreamSession;

  private subs$: Subscription[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  constructor(private lovenseService: LovenseService,
    private db: AngularFirestore,
    private router: Router,
    private http: HttpClient,
    private uiService: UIService) { }

  ngOnInit() {

    this.toys = new Map<string, LovenseToy>();
    this.subs$.push(timer(1000, 15000)
      .subscribe( x => {
        this.scanForToys();
    }));

    this.subs$.push(
      this.db.doc(`members/${localStorage.getItem('uid')}`)
    .valueChanges()
    .subscribe( (data: any) => {
      this.member = data;
      this.session = {...data.session, created: data.session.created.toDate()} ;
      }));


  }

  onSelectToyToUse(form: NgForm) {
    this.session.useToyId = form.value.useToyId ? form.value.useToyId : null;
    this.session.modified = new Date();
    this.db.doc(`members/${localStorage.getItem('uid')}`).update( {session: this.session});
    this.uiService.showSnackbar('Toy selection change saved', null, 3000);

  }

  navConfigure(toyid: string) {
    this.router.navigate(['/models/lovense/config/', toyid]);
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  scanForToys() {
    const endpoint = 'https://api.lovense.com/api/lan/getToys';

    this.http.get(endpoint).pipe(
      map(this.extractData)).toPromise().then( data => {
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
                appVersion: api.appVersion,
                commands: this.lovenseService.getToyCommands(at.name),
                image: this.lovenseService.getToyImage(at.name)
              };

              this.toys.set(t.did, t);
            }
          }
         }
         const toyArray: LovenseToy[] =  Array.from(this.toys.values());
         localStorage.setItem('toys', JSON.stringify(toyArray));

        }).catch( error => {
          console.error(error);
         });

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
