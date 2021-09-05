
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OrganizacionesComponent } from './components/organizaciones/organizaciones.component';
import { CampanasComponent } from './components/campanas/campanas.component';
import { ContainerDashboardComponent } from './components/container-dashboard/container-dashboard.component';
import { RouterModule } from '@angular/router';
import { DonadorComponent } from './component/donador/donador.component';
import { AuthenticationService } from './services/authentication/authentication.service';


@NgModule({
  declarations: [
    OrganizacionesComponent,
    CampanasComponent,
    ContainerDashboardComponent,
    DonadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class DashboardModule { }
