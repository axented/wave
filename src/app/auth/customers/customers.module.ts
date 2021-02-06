import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { NgSelect2Module } from 'ng-select2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [CustomersComponent, AddCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    DataTablesModule,
    NgbModule,
    NgSelect2Module,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ]
})
export class CustomersModule { }
