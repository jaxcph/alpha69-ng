import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member, Wallet } from 'src/app/member/member.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() toggleSidebar = new EventEmitter<void>();

  public isAuth = false;
  public isModel = false;
  public displayName: string;
  public level: number;
  public member: Member;
  public uid: string;
  public wallet: Wallet;

  private authServiceChangedSub: Subscription;
  private memberChangeSub: Subscription;
  private walletSub: Subscription;

  constructor(private authService: AuthService, private db: AngularFirestore) { }

  ngOnInit() {

    this.authServiceChangedSub = this.authService.changed.subscribe( status => {
      this.isAuth = status;

      if (this.isAuth) {
        this.uid = localStorage.getItem('uid');
         this.memberChangeSub = this.db.doc(`members/${this.uid}`).valueChanges()
              .subscribe( (member: Member) => {
                this.member = member;
                this.isModel = (member.isModel === true) ? true : false;
                this.displayName = member.displayName;
                this.level = member.level;

                this.walletSub = this.db.doc(`member-wallets/${this.uid}`)
                  .valueChanges()
                  .subscribe( (data: Wallet) => {
                     this.wallet = data;
                     });
                }
            );
      }
     });
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  onLogout() {
   this.authService.logout();
  }

// ------------------------------------
  ngOnDestroy() {
    if (this.authServiceChangedSub) { this.authServiceChangedSub.unsubscribe(); }
    if (this.memberChangeSub) { this.memberChangeSub.unsubscribe(); }
    if (this.walletSub) { this.walletSub.unsubscribe(); }
  }

}
