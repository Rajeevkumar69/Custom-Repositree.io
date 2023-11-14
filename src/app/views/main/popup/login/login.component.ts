import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
     selector: 'app-login',
     templateUrl: './login.component.html',
     styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
     public dialogBoxData: any = null;

     // prettier-ignore
     constructor(
          private _dialog: MatDialog,
          @Inject(MAT_DIALOG_DATA) private _DIALOG_DATA: any,
          private _dialogRef: MatDialogRef<LoginComponent>,
     ) {
          this.dialogBoxData = this._DIALOG_DATA;
     }

     ngOnInit(): void {}

     public closeDialogBox() {
          let payload = {
               userName: 'Rajeev Kumar',
               page: 'NewPopupComponent'
          };
          this._dialogRef.close(payload);
     }
}
