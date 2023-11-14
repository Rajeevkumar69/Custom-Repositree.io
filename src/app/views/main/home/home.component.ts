import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UiHelperService } from 'src/app/shared/services/ui-helper.service';
import { LoginComponent } from '../popup/login/login.component';

@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
     // prettier-ignore
     constructor(
          private _dialog: MatDialog,
          private _uiHelperService:UiHelperService,
          private _overlay: Overlay,
  ) { }

     ngOnInit(): void {}
}
