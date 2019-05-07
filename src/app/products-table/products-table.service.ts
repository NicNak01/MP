import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable()
export class ProductsTableService {
  getColumnNamesFromData(data: any[]): string[] {
    let keys = Object.keys(data[0]);
    keys = keys.filter(value => value !== 'productid');
    return keys;
  }
  sortItems(
    items: Product[],
    columnName: string,
    isSortAscending: boolean
  ): Product[] {
    const newItems = [...[], ...items] as Product[];

    const ascendingSort = (a, b) =>
      String(a[columnName]).localeCompare(String(b[columnName]));
    const descendingSort = (a, b) =>
      String(b[columnName]).localeCompare(String(a[columnName]));

    return newItems.sort((a, b) =>
      isSortAscending ? ascendingSort(a, b) : descendingSort(a, b)
    );
  }
}
