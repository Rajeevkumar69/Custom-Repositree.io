import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from '../main/home/home.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { PartialsModule } from '../main/partials/partials.module';
import { PropertyListingsComponent } from '../main/property-listings/property-listings.component';
import { BuildingsComponent } from '../main/buildings/buildings.component';
import { AppFeaturesComponent } from '../main/app-features/app-features.component';
import { AppServicesComponent } from '../main/app-services/app-services.component';
import { AppGuidelineComponent } from '../main/app-guideline/app-guideline.component';
import { AboutUsComponent } from '../main/about-us/about-us.component';
import { AppNewsComponent } from '../main/app-news/app-news.component';
import { ContactUsComponent } from '../main/contact-us/contact-us.component';
// prettier-ignore
@NgModule({
     declarations: [
          LayoutsComponent,
          HomeComponent,
          PropertyListingsComponent,
          BuildingsComponent,
          AppFeaturesComponent,
          AppServicesComponent,
          AppGuidelineComponent,
          AboutUsComponent,
          AppNewsComponent,
          ContactUsComponent,
  ],
     imports: [
          CommonModule,
          LayoutsRoutingModule,
          PartialsModule,
     ]
})
export class LayoutsModule {}
