import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then((m) => m.DashboardModule
      ),
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }