import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { EstimatesComponent } from './estimates.component';
import { EstimatesRoutingModule } from './estimates-routing.module';
import { NgSelect2Module } from 'ng-select2';
import { ToastrModule } from 'ngx-toastr';
import { AddEstimatesComponent } from './add-estimates/add-estimates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendEstimateComponent } from './send-estimate/send-estimate.component'

@NgModule({
  declarations: [EstimatesComponent, AddEstimatesComponent, SendEstimateComponent],
  imports: [
    CommonModule,
    EstimatesRoutingModule,
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
export class EstimatesModule { }
