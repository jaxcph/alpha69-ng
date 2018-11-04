import { Component, OnInit, OnDestroy } from '@angular/core';
import { LovenseService } from './lovense.service';
import { Subscription, Observable, timer } from 'rxjs';
import { LovenseToy, LovensenToyEvent } from './lovense.model';
import { map, timeInterval, delay, timeout } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member, StreamSession } from 'src/app/member/member.model';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/common/ui.service';
import { containsElement } from '@angular/animations/browser/src/render/shared';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-lovense',
  templateUrl: './lovense.component.html',
  styleUrls: ['./lovense.component.css']
})
export class LovenseComponent implements OnInit, OnDestroy {


  public toys: Map<string, LovenseToy>;
  public member: Member;
  public session: StreamSession;
  public toyInUse: boolean;
  public activeToyEvent: LovensenToyEvent;

  private subs$: Subscription[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private eventSub: Subscription;

  constructor(private lovenseService: LovenseService,
    private db: AngularFirestore,
    private router: Router,
    private http: HttpClient,
    private uiService: UIService,
    private ls: LovenseService) { }

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


          // see if we should setup subscription to session-toy-events, or unsubscribe
          if (!this.session.useToyId && this.eventSub) {
                this.eventSub.unsubscribe();
                console.log('un-subscripted from toy event listener');
          }
          if (this.session.useToyId)  {
            console.log('subscripted to toy event listener');
            this.eventSub = this.db.collection('session-toy-events', ref => ref
            .where('sid', '==', this.session.id)
            .orderBy('ts')
            .limit(1))
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
              .subscribe( (events: any[]) => {
                if (events.length > 0) {
                  setTimeout(() => {
                    console.log('*');
                    this.doEvent(events[0]).then();
                   }, 100); // delay 1 sec
                }
            });
          }
      }));


  }

  async doEvent(event: LovensenToyEvent) {
    return new Promise(resolve => {

      if (!this.toyInUse && this.session.useToyId) {

        const toy = this.toys.get(this.session.useToyId);
        if (toy.status === 1) {

            this.toyInUse = true;
            this.activeToyEvent = event;

            if (event.act === 'Vibrate' ||
                event.act === 'Rotate' ||
                event.act === 'RotateAntiClockwise' ||
                event.act === 'RotateClockwise' ||
                event.act === 'AirAuto' ||
                event.act === 'Preset') {
                  console.log(`+ ts: ${event.ts}`);
                  const urlOn = `https://${toy.domain}:${toy.httpsPort}/${event.act}?v=${event.val}&t=${event.did}`;
                  this.ls.sendCommand(urlOn)
                         .toPromise()
                         .then(resp => {  console.log(resp); })
                         .catch(error => {console.error(error); }  );

                if (event.secs <= 1) {event.secs = 1; }
                if (event.secs > 60) {event.secs = 60; }

                setTimeout(() => {  // wait
                  const urlOff = `https://${toy.domain}:${toy.httpsPort}/${event.act}?v=0&t=${event.did}`;
                  this.ls.sendCommand(urlOff)
                          .toPromise()
                          .then(resp => {  console.log(resp); })
                          .catch(error => {console.error(error); }  );
                  this.db.collection('session-toy-events').doc(event.id).delete();
                  this.toyInUse = false;
                  this.activeToyEvent = null;
                  console.log(`- ts: ${event.ts}`);
                }, event.secs * 1000);
            } else {
              // RotateChange, AirIn, AirOut

              const url = `https://${toy.domain}:${toy.httpsPort}/${event.act}?t=${event.did}`;
              this.ls.sendCommand(url)
              .toPromise()
              .then(resp => { console.log(resp); })
              .catch(error => {console.error(error); }  );

              this.db.collection('session-toy-events').doc(event.id).delete();
              this.toyInUse = false;
              this.activeToyEvent = null;
              console.log(`- ts: ${event.ts}`);
            }
        }
      }
    });
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

