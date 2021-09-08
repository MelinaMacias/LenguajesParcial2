
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonadorComponent } from './component/donador/donador.component';
import { CampanasComponent } from './components/campanas/campanas.component';
import { ContainerDashboardComponent } from './components/container-dashboard/container-dashboard.component';
import { CrearCampanaComponent } from './components/crear-campana/crear-campana/crear-campana.component';
import { OrganizacionesComponent } from './components/organizaciones/organizaciones.component';
import { AuthenticationGuard } from './guards/auth/autentication/authentication.guard';

const routes: Routes = [
  {
    path: "",
    component: ContainerDashboardComponent,
    canActivate: [ AuthenticationGuard ],
    children: [
      {
        path: "organizaciones",
        component: OrganizacionesComponent
      },
      {
        path: "donadores",
        component: DonadorComponent
      },
      {
        path: "campanas/nueva",
        component: CrearCampanaComponent
      },
      {
        path: "campanas",
        component: CampanasComponent
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
