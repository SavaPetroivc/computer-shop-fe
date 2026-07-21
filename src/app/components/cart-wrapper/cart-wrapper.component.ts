import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { MatStepper } from "@angular/material/stepper";
import { map } from "rxjs";
import { CurrentUserService } from "../../services/current-user.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-cart-wrapper",
  templateUrl: "./cart-wrapper.component.html",
  styleUrls: ["./cart-wrapper.component.scss"],
})
export class CartWrapperComponent {
  @ViewChild("stepper") stepper!: MatStepper;
  showLoginStep = !this.currentUserService.getCurrentUser();
  loginStepCompleted = false;
  cartEmpty$ = this.cartService
    .getCart$()
    .pipe(map((cart) => cart.length === 0));

  constructor(
    private currentUserService: CurrentUserService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef,
  ) {}

  onLoggedIn(): void {
    this.loginStepCompleted = true;
    this.cdr.detectChanges();
    this.stepper.next();
  }
}
