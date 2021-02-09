import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpeseCategoryComponent } from './expese-category.component';
import { ExpeseCategoryRoutingModule } from './expese-category-routing.module';

@NgModule({
  declarations: [ ExpeseCategoryComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ExpeseCategoryRoutingModule
  ]
})

export class ExpenseCategoryModule { }
