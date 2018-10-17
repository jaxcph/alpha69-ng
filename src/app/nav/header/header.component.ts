import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member } from 'src/app/member/member.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() toggleSidebar = new EventEmitter<void>();

  public isAuth = false;
  public isModel = false;

  private authServiceChangedSub: Subscription;
  private memberChangeSub: Subscription;

  constructor(private authService: AuthService, private db: AngularFirestore) { }

  ngOnInit() {
    this.authServiceChangedSub = this.authService.changed.subscribe( status => {
      this.isAuth = status;

      if (this.isAuth) {
         this.memberChangeSub = this.db.doc(`members/${localStorage.getItem('uid')}`).valueChanges()
              .subscribe( (member: Member) => {
                this.isModel = (member.isModel === true) ? true : false;
            } );
     }
     });
  }

  onToggleSidenav() {
    this.toggleSidebar.emit();
  }

  onLogout() {
   this.authService.logout();
  }

// ------------------------------------
  ngOnDestroy() {
    this.authServiceChangedSub.unsubscribe();
    this.memberChangeSub.unsubscribe();
  }

}
