import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {

    this.authService.signUp( form.value.email,
       form.value.password,
       form.value.displayName,
       form.value.isModel,
       form.value.dob);
  }


    ngOnDestroy(): void {

    }

}
