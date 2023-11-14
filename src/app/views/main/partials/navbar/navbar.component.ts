import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UiHelperService } from 'src/app/shared/services/ui-helper.service';
import { LoginComponent } from '../../popup/login/login.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
     selector: 'app-navbar',
     templateUrl: './navbar.component.html',
     styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
     // prettier-ignore
     constructor(
          private _dialog: MatDialog,
          private _uiHelperService:UiHelperService,
          private _overlay: Overlay,
     ){}

     ngOnInit(): void {}

     public openLoginDialog() {
          let payload = {
               userName: 'Rajeev',
               page: 'Navbar'
          };
          this._uiHelperService.offScrolling();
          this._dialog
               .open(LoginComponent, {
                    enterAnimationDuration: '300ms',
                    exitAnimationDuration: '300ms',
                    data: payload,
                    disableClose: true,
                    panelClass: 'Login-popup',
                    scrollStrategy: this._overlay.scrollStrategies.block()
               })
               .afterClosed()
               .subscribe((response) => {});
     }
}
