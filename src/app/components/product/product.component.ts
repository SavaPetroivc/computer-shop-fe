import { Component, Input, OnInit } from "@angular/core";
import { ProductCatalog } from "src/app/shared/dto/product";
import { CartService } from "../../services/cart.service";
import { of } from "rxjs";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class ProductComponent implements OnInit {
  @Input({ required: true }) product!: ProductCatalog;
  @Input() inCart = false;
  doesCartContainsProduct$ = of(false);

  constructor(
    public cartService: CartService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.doesCartContainsProduct$ = this.cartService.doesCartContainsProduct$(
      this.product.id,
    );
  }

  get isOutOfStock(): boolean {
    return this.product.quantity !== undefined && this.product.quantity < 1;
  }

  addToCart(): void {
    if (this.isOutOfStock) {
      return;
    }
    this.cartService.addToCart(this.product);
    this.snackBar.open(`${this.product.name} added to cart`, "OK", {
      duration: 2000,
    });
  }
}
