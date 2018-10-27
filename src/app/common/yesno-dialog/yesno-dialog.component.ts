import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Subscription, timer, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yesno-dialog',
  template: `<h1 mat-dialog-title>{{ data.title }}</h1>
            <mat-dialog-content>
              <p>{{ data.content }}</p>
            </mat-dialog-content>
            <mat-dialog-actions>
              <button mat-button [mat-dialog-close]="true">{{ data.yesLabel }}</button>
              <button mat-button [mat-dialog-close]="false" #closeBtn>{{ data.noLabel }}</button>
              <label *ngIf="seconds>0">{{seconds > 0 ? seconds : ''}}</label>
             </mat-dialog-actions>`
})
export class YesNoDialogComponent implements OnInit, OnDestroy {

  public seconds: number;
  countdownTimer: Observable<any>;
  private countdownTimerSub: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private dialogRef: MatDialogRef<YesNoDialogComponent>) {}

  ngOnInit(): void {

    if (this.data.timeoutSeconds) {
       this.seconds = this.data.timeoutSeconds;

       this.countdownTimer = timer(1000, 1000);
       this.countdownTimerSub = this.countdownTimer
        .subscribe(x => {
          console.log(`time in:  ${this.seconds} seconds`);

          this.seconds = this.seconds - 1;

          if (this.seconds === 0) {
            this.router.navigate([this.data.onTimeoutNavigate]);
            this.closeDialog();
          }
       });

    } else {
      this.seconds = 0;
    }

  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    if ( this.countdownTimerSub ) { this.countdownTimerSub.unsubscribe(); }
  }


}
