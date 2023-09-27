import { AfterViewInit, Component, Input } from "@angular/core";
import { ProductCatalog } from "src/app/shared/dto/product";
import { CartService } from "../../services/cart.service";
import { of } from "rxjs";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements AfterViewInit {
  @Input({ required: true }) product!: ProductCatalog;
  doesCartContainsProduct$ = of(false);

  constructor(public cartService: CartService) {}

  ngAfterViewInit(): void {
    this.doesCartContainsProduct$ = this.cartService.doesCartContainsProduct$(
      this.product.id,
    );
  }
}
