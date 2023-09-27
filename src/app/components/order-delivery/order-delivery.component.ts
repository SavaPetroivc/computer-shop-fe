import { Component } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CityService } from "../../services/city.service";
import { Observable } from "rxjs";
import { OrderService } from "../../services/order.service";
import { OrderDelivery } from "../../shared/dto/order/order-delivery.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-order-delivery",
  templateUrl: "./order-delivery.component.html",
  styleUrls: ["./order-delivery.component.scss"],
})
export class OrderDeliveryComponent {
  cities$: Observable<{ id: number; name: string }[]> =
    this.cityService.getCities();
  orderDeliveryForm = new FormGroup({
    zip: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    street: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    number: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    city: new FormControl<{ id: number; name: string } | null>(null, {
      validators: [Validators.required],
    }),
  });
  constructor(
    private cartService: CartService,
    private cityService: CityService,
    private orderService: OrderService,
    private snackBar: MatSnackBar,
  ) {}

  sendOrder() {
    this.orderService
      .makeOrder({
        orderDeliveryInfo:
          this.orderDeliveryForm.getRawValue() as OrderDelivery,
        orderProducts: this.cartService.getCart(),
      })
      .subscribe(() => {
        this.cartService.reset();
        this.snackBar.open("Order successfully created", "Done", {
          duration: 3000,
        });
      });
  }
}
