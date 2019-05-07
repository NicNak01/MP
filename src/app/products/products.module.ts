import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsContainerModule } from '../product-container/product-container-module';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule, ProductsContainerModule],
  declarations: [ProductsComponent]
})
export class ProductsModule {}
