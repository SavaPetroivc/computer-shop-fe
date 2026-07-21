import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CurrentUserService } from "../../services/current-user.service";
import { finalize, map } from "rxjs";
import { CartService } from "../../services/cart.service";
import { UserService } from "../../services/user.service";
import { MatDialog } from "@angular/material/dialog";
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
    private userService: UserService,
    private matDialog: MatDialog,
    private router: Router,
  ) {}

  openCart(){
    this.matDialog.open(CartWrapperComponent, {
      position: { right: "0" },
      height: "100vh",
      width: "50%",
    });
  }

  logout(): void {
    this.userService
      .logout()
      .pipe(
        finalize(() => {
          this.currentUserService.clearCurrentUser();
          this.router.navigate(["/"]);
        }),
      )
      .subscribe({ error: () => {} });
  }
}
