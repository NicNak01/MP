import { Injectable, OnChanges } from '@angular/core';
import { Product } from '../products/product';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from '../core/session-storage.service';

@Injectable()
export class ProductContainerService {
  productid: number;
  constructor(private sessionStorageService: SessionStorageService) {
    this.setProducts(this.getProducts());
  }
  private productsSubject$ = new BehaviorSubject<Product[]>([]);
  productsChanged$ = this.productsSubject$.asObservable();

  setProducts(products: Product[]): void {
    const storage = products && products.length ? products : [];
    this.productsSubject$.next(storage);
    this.productid = storage.length;
  }

  addProduct(product): void {
    this.productid += 1;
    product['productid'] = this.productid;
    const newProducts = [...this.productsSubject$.value, product];
    this.sessionStorageService.setProductsIntoStorage(newProducts);
    this.productsSubject$.next(newProducts);
  }

  editProduct(product: Product): void {
    const index = this.productsSubject$.value.findIndex(
      obj => obj.productid === product.productid
    );
    let editProducts = [...this.productsSubject$.value];
    editProducts[index] = product;
    this.productsSubject$.next(editProducts);
    this.sessionStorageService.setProductsIntoStorage(editProducts);
  }

  deleteProduct(product: Product): void {
    const filteredProducts = this.productsSubject$.value.filter(
      value => value.productid !== product.productid
    );
    this.productsSubject$.next(filteredProducts);
    this.sessionStorageService.setProductsIntoStorage(filteredProducts);
  }

  getProducts(): Product[] {
    return this.sessionStorageService.getProducts();
  }
}
