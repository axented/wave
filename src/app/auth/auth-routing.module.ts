import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard', 
        loadChildren: () =>
          import('./dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./customers/customers.module')
          .then((m) => m.CustomersModule)
      },
      {
          path: 'estimates',
          loadChildren: () =>
            import('./estimates/estimates.module')
            .then((m) => m.EstimatesModule)
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
          path: 'expenses',
          loadChildren: () =>
            import('./expenses/expenses.module')
            .then((m) => m.ExpensesModule),
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
