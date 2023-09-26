import { Component, Input } from "@angular/core";
import { ProductCatalog } from "src/app/shared/dto/product";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
  @Input({ required: true }) product!: ProductCatalog

  constructor(public cartService:CartService) {
  }
}
