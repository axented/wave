import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxTypesComponent } from './tax-types.component';
import { TaxTypesRoutingModule } from './tax-types-routing.module';

@NgModule({
  declarations: [ TaxTypesComponent ],
  imports: [CommonModule, TaxTypesRoutingModule],
})
export class TaxTypesModule {}
