import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  onBtnClick() {
    this.userService.auth(this.loginForm.getRawValue()).subscribe(
      (response) => {
        this.router.navigate(["/dashboard"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
