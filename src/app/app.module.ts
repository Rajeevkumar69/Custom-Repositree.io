import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// prettier-ignore

@NgModule({
     declarations: [
      AppComponent,
      NopagefoundComponent
      ],
     imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      HttpClientModule,
      BrowserAnimationsModule
      ],
     providers: [],
     bootstrap: [AppComponent]
})
export class AppModule {}
