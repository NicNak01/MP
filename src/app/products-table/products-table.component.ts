import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { ProductsTableService } from './products-table.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent implements OnChanges {
  @Input() data: Product[];
  @Output() productEditEmitter: EventEmitter<Product> = new EventEmitter<
    Product
  >();
  @Output() productDeleteEmitter: EventEmitter<Product> = new EventEmitter<
    Product
  >();
  @Output() showFormEmitter = new EventEmitter<boolean>();
  product: Product;
  products: Product[];
  columns: string[];
  isSortAscending: boolean;
  sortColumn: string;
  constructor(private productsTableService: ProductsTableService) {}
  ngOnChanges() {
    this.products = [...this.data];
    this.columns = this.productsTableService.getColumnNamesFromData(this.data);
  }

  editProduct(productForEdit: Product): void {
    this.showForm();
    const product = { ...productForEdit };
    this.productEditEmitter.emit(product);
  }
  deleteProduct(productForDelete: Product): void {
    const product = { ...productForDelete };
    this.productDeleteEmitter.emit(product);
  }
  sort(column: string): void {
    this.products = this.productsTableService.sortItems(
      this.products,
      column,
      this.isSortAscending
    );
    this.isSortAscending = !this.isSortAscending;
    this.sortColumn = column;
  }
  private showForm(): void {
    this.showFormEmitter.emit(true);
  }
}
