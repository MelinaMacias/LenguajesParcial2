
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OrganizacionesComponent } from './components/organizaciones/organizaciones.component';
import { CampanasComponent } from './components/campanas/campanas.component';
import { ContainerDashboardComponent } from './components/container-dashboard/container-dashboard.component';
import { RouterModule } from '@angular/router';
import { DonadorComponent } from './component/donador/donador.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { CrearCampanaComponent } from './components/crear-campana/crear-campana/crear-campana.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificacionesService } from './service/notificacion/notificacion.service';
import { HasRoleDirective } from './directives/has-role/has-role.directive';


@NgModule({
  declarations: [
    OrganizacionesComponent,
    CampanasComponent,
    ContainerDashboardComponent,
    DonadorComponent,
    CrearCampanaComponent,
    HasRoleDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
  providers: [
    AuthenticationService,
    NotificacionesService
  ]
})
export class DashboardModule { }
