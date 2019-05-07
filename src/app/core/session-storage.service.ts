import { Injectable } from '@angular/core';

import dummyProducts from './products.json';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor() {
    if (!sessionStorage.getItem('products')) {
      this.setProductsIntoStorage(dummyProducts);
    }
  }
  setStorage(username: string) {
    this.setProductsIntoStorage(dummyProducts);
    sessionStorage.setItem('currentUser', JSON.stringify(username));
  }
  clearStorage() {
    sessionStorage.removeItem('products');
    sessionStorage.removeItem('currentUser');
  }
  getUser(): string {
    return sessionStorage.getItem('currentUser');
  }
  getProducts(): Product[] {
    return JSON.parse(sessionStorage.getItem('products'));
  }

  setProductsIntoStorage(products: Product[]): void {
    sessionStorage.setItem('products', JSON.stringify(products));
  }
}
