import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './expenses-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ExpensesComponent } from './expenses.component';
import { NgSelect2Module } from 'ng-select2';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [ExpensesComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    DataTablesModule,
    NgSelect2Module,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ]
})
export class ExpensesModule { }
