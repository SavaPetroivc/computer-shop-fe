import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { StateModel } from "../../../../../store/model/state.model";
import { createProduct } from "../../../../../store/product/product.action";

@Component({
  selector: "app-product-create-form",
  templateUrl: "./product-create-form.component.html",
  styleUrls: ["./product-create-form.component.scss"],
})
export class ProductCreateFormComponent {
  productForm = new FormGroup({
    name: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    price: new FormControl(0, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    quantity: new FormControl(0, {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(private store: Store<StateModel>) {}

  create() {
    this.store.dispatch(
      createProduct({ payload: this.productForm.getRawValue() }),
    );
  }
}
