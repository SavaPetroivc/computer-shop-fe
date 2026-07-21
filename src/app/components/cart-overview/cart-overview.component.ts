import { Component } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { Observable } from "rxjs";
import { OrderProduct } from "../../shared/dto/order/order-product.model";

@Component({
  selector: "app-cart-overview",
  templateUrl: "./cart-overview.component.html",
  styleUrls: ["./cart-overview.component.scss"],
})
export class CartOverviewComponent {
  currentCart$: Observable<OrderProduct[]> = this.cartService.getCart$();
  constructor(private cartService: CartService) {}

  protected readonly parent = parent;
}
