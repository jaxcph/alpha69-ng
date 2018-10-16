import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StreamService {


  constructor(private db: AngularFirestore) { }

  fetchNewStream() {
   const streamKey  = Math.round((new Date()).getTime() / 1000);
   return {
        url: 'rtmp://104.40.203.155:1935/live',
        key: `${streamKey}`
      };
}

}
