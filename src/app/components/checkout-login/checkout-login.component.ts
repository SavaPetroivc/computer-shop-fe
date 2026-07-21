import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "../../services/user.service";
import { CurrentUserService } from "../../services/current-user.service";

@Component({
  selector: "app-checkout-login",
  templateUrl: "./checkout-login.component.html",
  styleUrls: ["./checkout-login.component.scss"],
})
export class CheckoutLoginComponent {
  @Output() loggedIn = new EventEmitter<void>();
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private userService: UserService,
    private currentUserService: CurrentUserService,
    private snackBar: MatSnackBar,
  ) {}

  login(): void {
    this.userService.auth(this.loginForm.getRawValue()).subscribe({
      next: (response) => {
        this.currentUserService.addCurrentUser(response);
        this.loggedIn.emit();
      },
      error: (error: HttpErrorResponse) => {
        this.snackBar.open(this.resolveErrorMessage(error), "Close", {
          duration: 4000,
        });
      },
    });
  }

  private resolveErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404:
        return "No user found with that username.";
      case 406:
        return "Incorrect password.";
      case 0:
        return "Cannot reach the server. Please try again later.";
      default:
        return error.error?.message ?? "Login failed. Please try again.";
    }
  }
}
