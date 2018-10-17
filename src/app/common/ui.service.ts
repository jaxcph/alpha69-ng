import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  public loadingStateChange = new Subject<boolean>();

  constructor(private snackbar: MatSnackBar) { }

  showSnackbarError(error) {
    this.snackbar.open(error.message, null, { duration: 5000});
    console.error(error);
  }

  showSnackbar(message, action, duration) {
    this.snackbar.open(message, action, { duration: duration});
  //  console.log(message);
  }
}
