import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CityService } from "../../services/city.service";
import { filter, Observable, take } from "rxjs";
import { OrderService } from "../../services/order.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { CurrentUserService } from "../../services/current-user.service";

type City = { id: number; name: string };

@Component({
  selector: "app-order-delivery",
  templateUrl: "./order-delivery.component.html",
  styleUrls: ["./order-delivery.component.scss"],
})
export class OrderDeliveryComponent implements OnInit {
  cities$: Observable<City[]> = this.cityService.getCities();
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
    city: new FormControl<City | null>(null, {
      validators: [Validators.required],
    }),
  });
  constructor(
    private cartService: CartService,
    private cityService: CityService,
    private orderService: OrderService,
    private snackBar: MatSnackBar,
    private currentUserService: CurrentUserService,
    private dialog: MatDialog,
  ) {}

  cancelOrder(): void {
    this.cartService.reset();
    this.dialog.closeAll();
    this.snackBar.open("Order cancelled, your cart is now empty.", "OK", {
      duration: 3000,
    });
  }

  ngOnInit(): void {
    this.currentUserService
      .getCurrentUser$()
      .pipe(filter(Boolean), take(1))
      .subscribe((user) => {
        const contact = user.userContactInfo;
        if (!contact) {
          return;
        }
        this.orderDeliveryForm.patchValue({
          street: contact.street ?? "",
          number: contact.number ?? "",
          zip: contact.zip ?? "",
          city: contact.city ?? null,
        });
      });
  }

  compareCities = (a: City | null, b: City | null): boolean =>
    a?.id === b?.id;

  sendOrder() {
    if (!this.cartService.getCart().length) {
      this.snackBar.open("Your cart is empty.", "Close", { duration: 3000 });
      return;
    }
    if (this.orderDeliveryForm.invalid) {
      this.orderDeliveryForm.markAllAsTouched();
      return;
    }
    const formValue = this.orderDeliveryForm.getRawValue();
    this.orderService
      .makeOrder({
        orderDeliveryInfo: {
          city: { id: formValue.city!.id },
          zip: formValue.zip,
          street: formValue.street,
          number: formValue.number,
        },
        orderProducts: this.cartService.getCart().map((op) => ({
          product: { id: op.product.id } as any,
          quantity: op.quantity,
        })),
      })
      .subscribe({
        next: () => {
          this.cartService.reset();
          this.snackBar.open("Order successfully created", "Done", {
            duration: 3000,
          });
        },
        error: (err) => {
          console.log("Order error:", err);
          this.snackBar.open(
            err?.error?.message || "Failed to create order",
            "Close",
            { duration: 5000 },
          );
        },
      });
  }
}
