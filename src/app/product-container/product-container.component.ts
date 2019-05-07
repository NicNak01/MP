import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductContainerService } from './product-container.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
  providers: [ProductContainerService]
})
export class ProductContainerComponent implements OnInit {
  products: Product[];
  sub: Subscription;
  productForEditing: Product;
  formStatus: boolean;
  btnStatus = true;
  edit: boolean;

  constructor(private productContainerService: ProductContainerService) {}

  newProductbtn(): void {
    this.edit = false;
    this.formStatus = true;
    this.btnStatus = !this.formStatus;
  }
  addProduct(product: Product): void {
    this.productContainerService.addProduct(product);
  }
  editEvent(product: Product): void {
    this.edit = true;
    this.formStatus = true;
    this.btnStatus = !this.formStatus;
    this.productForEditing = product;
  }
  swapFormToBtn(status: boolean): void {
    this.formStatus = status;
    this.btnStatus = !this.formStatus;
  }
  editProduct(product: Product): void {
    this.productContainerService.editProduct(product);
  }

  deleteProduct(product: Product): void {
    this.productContainerService.deleteProduct(product);
  }
  ngOnInit() {
    this.sub = this.productContainerService.productsChanged$.subscribe(
      products => (this.products = products)
    );
  }
}
