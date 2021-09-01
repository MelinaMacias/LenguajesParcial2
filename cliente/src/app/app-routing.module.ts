
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren:()  =>  import('./dashboard/dashboard.module').then(m => m.DashboardModule)

  },
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
