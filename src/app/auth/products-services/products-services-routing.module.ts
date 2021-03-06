import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsServicesComponent } from './products-services.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsServicesRoutingModule {}
