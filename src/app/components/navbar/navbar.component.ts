import { Component } from "@angular/core";
import { CurrentUserService } from "../../services/current-user.service";
import { map } from "rxjs";
import { CartService } from "../../services/cart.service";
import { MatDialog } from "@angular/material/dialog";
import { CartOverviewComponent } from "../cart-overview/cart-overview.component";
import { CartWrapperComponent } from "../cart-wrapper/cart-wrapper.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  authenticated$ = this.currentUserService
    .getCurrentUser$()
    .pipe(map((user) => !!user));

  currentNumberOfProducts$ = this.cartService.getTotalQuantity();
  constructor(
    private currentUserService: CurrentUserService,
    private cartService: CartService,
    private matDialog: MatDialog,
  ) {}

  openCart(){
    this.matDialog.open(CartWrapperComponent, {
      position: { right: "0" },
      height: "100vh",
      width: "50%",
    });
  }
}
