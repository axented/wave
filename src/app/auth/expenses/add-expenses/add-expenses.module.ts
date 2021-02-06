import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { AddExpensesComponent } from './add-expenses.component';
import { AddExpensesRoutingModule } from './add-expenses-routing.module';
import { NgSelect2Module } from 'ng-select2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AddExpensesComponent ],
  imports: [
    CommonModule,
    AddExpensesRoutingModule,
    DataTablesModule,
    NgSelect2Module,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AddExpensesModule { }
