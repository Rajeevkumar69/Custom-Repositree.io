import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from '../main/home/home.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { PartialsModule } from '../main/partials/partials.module';
import { PropertyListingsComponent } from '../main/property-listings/property-listings.component';
import { BuildingsComponent } from '../main/buildings/buildings.component';
// prettier-ignore
@NgModule({
     declarations: [
          LayoutsComponent,
          HomeComponent,
          PropertyListingsComponent,
          BuildingsComponent
  ],
     imports: [
          CommonModule,
          LayoutsRoutingModule,
          PartialsModule,
     ]
})
export class LayoutsModule {}
