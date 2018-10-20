import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alpha69-ng';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // localStorage.removeItem('uid');
    localStorage.removeItem('mid');
    this.authService.initAuthListener();
  }
}
