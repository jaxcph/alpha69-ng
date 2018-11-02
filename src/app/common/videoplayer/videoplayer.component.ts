import { Component, OnInit } from '@angular/core';


// https://github.com/mattlewis92/angular-resizable-element/tree/master/src
@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {


  public source: String;


  constructor() { }

  ngOnInit() {

    // tslint:disable-next-line:max-line-length
    this.source = 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/trailerExtended-320p.mp4?alt=media&token=d4028ec7-6451-42a8-b368-24e0f4b2e542';
  }

}
