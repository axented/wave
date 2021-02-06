import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses.component';

const routes: Routes = [
	{
		path : '',
		component : ExpensesComponent
	},
	{
    path: 'add-expenses',
    loadChildren: () =>
      import('./add-expenses/add-expenses.module')
      .then((m) => m.AddExpensesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
