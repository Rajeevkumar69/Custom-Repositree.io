import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './views/popup/login/login.component';

// prettier-ignore

@NgModule({
     declarations: [
      AppComponent,
      NopagefoundComponent,
      LoginComponent
      ],
     imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatDialogModule 
      ],
     providers: [],
     bootstrap: [AppComponent]
})
export class AppModule {}
