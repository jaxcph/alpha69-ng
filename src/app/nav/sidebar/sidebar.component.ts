import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member } from 'src/app/member/member.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter<void>();

  public isAuth = false;
  public isModel = false;
  public displayName: string;
  public level: number;

  private authServiceChangedSub: Subscription;
  private memberChangeSub: Subscription;

  constructor(private authService: AuthService, private db: AngularFirestore) {
   }

   ngOnInit() {
    this.authServiceChangedSub = this.authService.changed.subscribe( status => {
      this.isAuth = status;

      if (this.isAuth) {
         this.memberChangeSub = this.db.doc(`members/${localStorage.getItem('uid')}`).valueChanges()
              .subscribe( (member: Member) => {
                this.isModel = (member.isModel === true) ? true : false;
                this.displayName = member.displayName;
                this.level = member.level;
            } );
     }
     });
  }

  onClose() {
    this.close.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authServiceChangedSub.unsubscribe();
    this.memberChangeSub.unsubscribe();
  }


}
