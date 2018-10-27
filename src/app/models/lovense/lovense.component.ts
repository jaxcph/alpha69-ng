import { Component, OnInit, OnDestroy } from '@angular/core';
import { LovenseService } from './lovense.service';
import { Subscription } from 'rxjs';
import { LovenseToy } from './lovense.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lovense',
  templateUrl: './lovense.component.html',
  styleUrls: ['./lovense.component.css']
})
export class LovenseComponent implements OnInit, OnDestroy {

  public toys: LovenseToy[] = [];

  private subs$: Subscription[] = [];
  constructor(private lovenseService: LovenseService) { }

  ngOnInit() {
  }

  onScan() {
    console.log('onscan');
    this.getToys();
  }

  private getToys() {
    this.subs$.push(

     this.lovenseService.getToys().subscribe( data => {
      console.log(data);
      this.toys = [];
      const apis = Object.keys(data).map(e => data[e]);
      for (const api of apis) {

        const apiToys = Object.keys(api.toys).map(e => api.toys[e]);
        if (apiToys.length > 0) {
          for (const at of apiToys) {
            const t: LovenseToy = {
              ...at,
              domain: api.domain,
              httpPort: api.httpPort,
              httpsPort: api.httpsPort,
              wsPort: api.wsPort,
              wwsPort: api.wssPort,
              platform: api.platform,
              appVersion: api.appVersion};
            console.log(t);
            this.toys.push(t);
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
