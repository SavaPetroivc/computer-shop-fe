import { Component, Input } from "@angular/core";
import { ProductCatalog } from "src/app/shared/dto/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
  @Input({ required: true }) product!: ProductCatalog;
}
