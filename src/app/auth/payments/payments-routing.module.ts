import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [
	{
		path : '',
		component : PaymentsComponent
	},
	{
    path: 'add-payments',
    loadChildren: () =>
      import('./add-payments/add-payments.module')
      .then((m) => m.AddPaymentsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule {}
