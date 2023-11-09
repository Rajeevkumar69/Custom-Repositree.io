import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from '../main/home/home.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { PartialsModule } from '../main/partials/partials.module';
// prettier-ignore
@NgModule({
     declarations: [
          LayoutsComponent,
          HomeComponent
  ],
     imports: [
          CommonModule,
          LayoutsRoutingModule,
          PartialsModule,
     ]
})
export class LayoutsModule {}
