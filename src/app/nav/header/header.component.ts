import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() toggleSidebar = new EventEmitter<void>();

  public isAuth = false;
  private authServiceChangedSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authServiceChangedSub = this.authService.changed.subscribe( status => {
      this.isAuth = status;
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
  }

}
