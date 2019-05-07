import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Product } from '../products/product';

@Component({
  selector: 'app-standart-row-form',
  templateUrl: './standart-row-form.component.html',
  styleUrls: ['./standart-row-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandartRowFormComponent implements OnInit, OnChanges {
  @Output() saveEvent: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() productForEditingEmitter: EventEmitter<Product> = new EventEmitter<
    Product
  >();
  @Output() swapFormToBtnEmitter: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Input() productForEditing: Product;
  @Input() formStatus: boolean;
  @Input() edit: boolean;

  product: any;
  rowForm: FormGroup;
  id: FormControl;
  name: FormControl;
  price: FormControl;
  authentication = false;
  form = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.rowForm = this.fb.group({
      productid: 0,
      id: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
  ngOnChanges() {
    this.form = this.formStatus;
    this.product = { ...this.productForEditing };
    this.displayProduct(this.productForEditing);
    if (!this.edit && this.form) {
      this.rowForm.reset();
    }
  }

  displayProduct(product: Product): void {
    if (product) {
      this.product = { ...product };
      this.rowForm.setValue({
        productid: this.product.productid,
        id: this.product.id,
        name: this.product.name,
        price: this.product.price
      });
    }
  }
  swapFormToBtn(): void {
    this.swapFormToBtnEmitter.emit(false);
  }
  save(form): void {
    this.swapFormToBtn();
    this.product = { ...form } as Product;
    if (this.edit) {
      this.productForEditingEmitter.emit(this.product);
      this.product = null;
    } else {
      this.saveEvent.emit(this.product);
    }
  }
}
