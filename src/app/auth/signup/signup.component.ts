import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService) { }

  public maxDate;

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }


  onSubmit(form: NgForm) {

   /* let ok = false;

    if (form.value.agreeMember === true && form.value.agree18yo === true ) {

      if (form.value.isModel === true && form.value.agreeModel === true ) {
        ok = true;
      }
    }*/
    this.authService.signUp( form.value.email,
       form.value.password,
       form.value.displayName,
       (form.value.isModel === true ? true : false),
       form.value.dob,
       form.value.realfullname,
       form.value.aboutMe,
       form.value.avatarImg,
       form.value.listingImg);
  }


    ngOnDestroy(): void {

    }

}
