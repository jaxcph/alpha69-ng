import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  
  @Output() close =new EventEmitter<void>();
  
  public isLoggedIn = false;
  public isModel = false;

  constructor() { }

  onClose(){
    this.close.emit();
  }

  onLogout(){

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    
  }


}
