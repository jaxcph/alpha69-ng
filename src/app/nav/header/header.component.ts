import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() toggleSidebar =new EventEmitter<void>();
  public isLoggedIn = false;
  constructor() { }

  ngOnInit() {
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  onLogout() {

   }
 
   ngOnDestroy(): void {
    
  }

}
