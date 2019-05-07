import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsTableComponent } from './products-table.component';
import { ProductsTableService } from './products-table.service';

@NgModule({
  declarations: [ProductsTableComponent],
  exports: [ProductsTableComponent],
  imports: [CommonModule],
  providers: [ProductsTableService]
})
export class ProductsTableModule {}
