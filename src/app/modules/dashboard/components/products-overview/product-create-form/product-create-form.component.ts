import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-product-create-form",
  templateUrl: "./product-create-form.component.html",
  styleUrls: ["./product-create-form.component.scss"],
})
export class ProductCreateFormComponent {
  productForm = new FormGroup({
    name: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
    quantity: new FormControl(0, Validators.required),
  });
}
