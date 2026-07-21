import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "src/app/services/user.service";
import { CurrentUserService } from "../../services/current-user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private currentUserService: CurrentUserService,
    private snackBar: MatSnackBar,
  ) {}
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  onBtnClick() {
    this.userService.auth(this.loginForm.getRawValue()).subscribe({
      next: (response) => {
        this.currentUserService.addCurrentUser(response);
        this.router.navigate(["/"]);
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
