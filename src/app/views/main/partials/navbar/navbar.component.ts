import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UiHelperService } from 'src/app/shared/services/ui-helper.service';
import { LoginComponent } from '../../popup/login/login.component';

@Component({
     selector: 'app-navbar',
     templateUrl: './navbar.component.html',
     styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
     // prettier-ignore
     constructor(
          private _dialog: MatDialog,
          private _uiHelperService:UiHelperService
     ){}

     ngOnInit(): void {}

     public openLoginDialog() {
          this._uiHelperService.offScrolling();
          this._dialog
               .open(LoginComponent, {
                    panelClass: 'login-dialog-panel'
               })
               .afterClosed()
               .subscribe((response) => {
                    this._uiHelperService.onScrolling();
               });
     }
}
