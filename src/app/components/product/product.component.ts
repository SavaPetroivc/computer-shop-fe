import { AfterViewInit, Component, Input } from "@angular/core";
import { ProductCatalog } from "src/app/shared/dto/product";
import { CartService } from "../../services/cart.service";
import { of } from "rxjs";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
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
