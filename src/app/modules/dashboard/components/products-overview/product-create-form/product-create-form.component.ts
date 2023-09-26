import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { StateModel } from "../../../../../store/model/state.model";
import {
  createProduct,
  updateProduct,
} from "../../../../../store/product/product.action";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Product } from "../../../../../shared/dto/product";

@Component({
  selector: "app-product-create-form",
  templateUrl: "./product-create-form.component.html",
  styleUrls: ["./product-create-form.component.scss"],
})
export class ProductCreateFormComponent {
  productForm = new FormGroup({
    name: new FormControl(this.product ? this.product.name : "", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    price: new FormControl(this.product ? this.product.price : 0, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    quantity: new FormControl(this.product ? this.product.quantity : 0, {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) private product: Product,
    private store: Store<StateModel>,
  ) {}

  createOrUpdate() {
    if (!this.product) {
      this.store.dispatch(
        createProduct({ payload: this.productForm.getRawValue() }),
      );
    } else {
      this.store.dispatch(
        updateProduct({
          payload: { ...this.productForm.getRawValue(), id: this.product.id },
        }),
      );
    }
  }
}
