import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { NgSelect2Module } from 'ng-select2';
import { ToastrModule } from 'ngx-toastr';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [InvoicesComponent, AddInvoiceComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    NgSelect2Module,
    NgbModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ]
})
export class InvoicesModule { }
