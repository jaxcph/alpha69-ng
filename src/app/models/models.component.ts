import { Component, OnInit, OnDestroy } from '@angular/core';
import { Member } from '../member/member.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit, OnDestroy {

  public models: Member[] = [];
  private modelsSub: Subscription;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.modelsSub = this.db.collection('members', ref => {
      return ref
      .where('isModel', '==', true);
    })
    .valueChanges()
    .subscribe( (data: Member[]) => {
      this.models = data;
      console.log(this.models);
    });

  }

  ngOnDestroy(): void {
    if ( this.modelsSub ) { this.modelsSub.unsubscribe(); }
  }


}
