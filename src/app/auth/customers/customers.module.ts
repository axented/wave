import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { NgSelect2Module } from 'ng-select2';

@NgModule({
  declarations: [ CustomersComponent, AddCustomerComponent ],
  imports: [
      CommonModule,
      CustomersRoutingModule,
      DataTablesModule,
      NgbModule,
      NgSelect2Module
    ]
})
export class CustomersModule {}
