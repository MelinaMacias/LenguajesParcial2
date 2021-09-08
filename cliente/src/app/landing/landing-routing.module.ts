
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampanasComponent } from './components/campanas/campanas/campanas.component';
import { DetalleCampanaComponent } from './components/detalle-campana/detalle-campana/detalle-campana.component';
import { DonacionComponent } from './components/donacion/donacion/donacion.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

const routes: Routes = [
  {
    path: "",
    component: MainpageComponent
  },
  {
    path: "campana/:id",
    component: DetalleCampanaComponent
  },
  {
    path: "campanas",
    component: CampanasComponent
  },
  {
    path: "donacion/:id",
    component: DonacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
