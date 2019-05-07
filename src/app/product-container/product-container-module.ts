import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductContainerComponent } from './product-container.component';
import { ProductsTableModule } from '../products-table/products-table.module';
import { StandartRowModule } from '../standart-row-form/standart-row-module';

@NgModule({
  imports: [CommonModule, ProductsTableModule, StandartRowModule],
  declarations: [ProductContainerComponent],
  exports: [ProductContainerComponent]
})
export class ProductsContainerModule {}
