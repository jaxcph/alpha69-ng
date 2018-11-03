import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

import 'confetti-js';
import { delay } from 'rxjs/operators';
import { Observable, timer, Subscription } from 'rxjs';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

declare var jQuery: any;
declare var $: any;
declare var ConfettiGenerator: any;
declare var confetti: any;
declare var confettiSettings: any;

// https://github.com/mattlewis92/angular-resizable-element/tree/master/src
@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {


  public source: String;
  public fxTimer: Observable<any>;
  private fxTimer$: Subscription;

  public width: number;
  public height: number;

  constructor() { }

  ngOnInit() {

    // tslint:disable-next-line:max-line-length
    this.source = 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/trailerExtended-320p.mp4?alt=media&token=d4028ec7-6451-42a8-b368-24e0f4b2e542';
    this.showConfetti(60);
  }

 setVideoSize(p: number) {

  $('#videoplayer').width = p;
  $('#videoplayer').height =  Math.round(p * (16 / 9));

 }

  showConfetti(seconds: number) {

    var confettiSettings = {
      target: 'fx-overlay',
      max: 80,
      size: 5,
      animate : true,
      props: ['circle'],
      colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
      clock: 25,
      rotate: false,
    };

    var confetti = new ConfettiGenerator(confettiSettings);

    confetti.render();
    this.fxTimer = this.fxTimer = timer(seconds * 1000, 200);
    this.fxTimer$ = this.fxTimer.subscribe(s => {
        confetti.clear();
        this.fxTimer$.unsubscribe();
      });

  }

  /*expand() {
    $('#fx-overlay').width = '100%';
    $('#fx-overlay').height = '100%';
  }

  colapse() {
     $('#fx-overlay').width = '1%';
     $('#fx-overlay').height = '1%';
  }

  stopConfetti() {
    confetti.clear();
  }
*/
}
