import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { DetalleCampanaComponent } from './components/detalle-campana/detalle-campana/detalle-campana.component';
import { CampanasComponent } from './components/campanas/campanas/campanas.component';


@NgModule({
  declarations: [
    MainpageComponent,
    DetalleCampanaComponent,
    CampanasComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
