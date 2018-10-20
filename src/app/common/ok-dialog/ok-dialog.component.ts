import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ok-dialog',
  template: `<h1 mat-dialog-title>{{ data.title }}</h1>
            <mat-dialog-content>
              <p>{{ data.content }}</p>
            </mat-dialog-content>
            <mat-dialog-actions>
              <button mat-button [mat-dialog-close]="true">{{ data.okLabel }}</button>
            </mat-dialog-actions>`
})
export class OKDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
