import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelect2Module } from 'ng-select2';
import { DeleteAccountComponent } from './delete-account.component';
import { DeleteAccountRoutingModule } from './delete-account-routing.module';

@NgModule({
  declarations: [ DeleteAccountComponent ],
  imports: [NgSelect2Module, CommonModule, DeleteAccountRoutingModule],
})
export class DeleteAccountModule {}
