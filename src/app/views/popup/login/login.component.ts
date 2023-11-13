import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
     selector: 'app-login',
     templateUrl: './login.component.html',
     styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
     // prettier-ignore
     constructor(
          private _dialog: MatDialog
     ) {}

     ngOnInit(): void {}

     public colseDialog() {
          this._dialog.closeAll();
     }
}
