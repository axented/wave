import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./customers/customers.module')
            .then((m) => m.CustomersModule)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module')
            .then(m => m.DashboardModule)
      },
      {
        path: 'estimates',
        loadChildren: () =>
          import('./estimates/estimates.module')
            .then((m) => m.EstimatesModule)
      },
      {
        path: 'expenses',
        loadChildren: () =>
          import('./expenses/expenses.module')
            .then((m) => m.ExpensesModule),
      },
      {
        path: 'invoices',
        loadChildren: () =>
          import('./invoices/invoices.module')
            .then((m) => m.InvoicesModule)
      },
      {
        path: 'payments',
        loadChildren: () =>
          import('./payments/payments.module')
            .then((m) => m.PaymentsModule)
      },
      {
        path: 'products-services',
        loadChildren: () =>
          import('./products-services/products-services.module')
            .then((m) => m.ProductsServicesModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module')
            .then((m) => m.ProfileModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./setting/setting.module')
            .then((m) => m.SettingModule),
      },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
