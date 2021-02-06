import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { ProductsServicesComponent } from './products-services.component';
import { ProductsServicesRoutingModule } from './products-services-routing.module';
import { NgSelect2Module } from 'ng-select2';
import { ToastrModule } from 'ngx-toastr';
import { AddProductsComponent } from './add-products/add-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsServicesComponent, AddProductsComponent],
  imports: [
    CommonModule,
    ProductsServicesRoutingModule,
    NgSelect2Module,
    NgbModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
})
export class ProductsServicesModule { }
