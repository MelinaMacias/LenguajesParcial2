
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta/crear-cuenta.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren:()  =>  import('./dashboard/dashboard.module').then(m => m.DashboardModule)

  },
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registro",
    component: CrearCuentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
