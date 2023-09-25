import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  signupForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    contactPhone: new FormControl(),
  });

  onBtnClick() {
    const formRaw = this.signupForm.getRawValue();
    const userContactInfo = {
      email: formRaw.email,
      contactPhone: formRaw.contactPhone,
    };
    this.userService
      .signup({
        ...formRaw,
        userContactInfo,
      })
      .subscribe(
        (response) => {
          this.router.navigate(["/login"]);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
