import { Component } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  private static readonly PHONE_PATTERN = /^\+[1-9]\d{6,14}$/;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  signupForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    contactPhone: new FormControl("", [
      Validators.required,
      Validators.pattern(SignupComponent.PHONE_PATTERN),
    ]),
  });

  get username(): AbstractControl | null {
    return this.signupForm.get("username");
  }
  get password(): AbstractControl | null {
    return this.signupForm.get("password");
  }
  get firstName(): AbstractControl | null {
    return this.signupForm.get("firstName");
  }
  get lastName(): AbstractControl | null {
    return this.signupForm.get("lastName");
  }
  get email(): AbstractControl | null {
    return this.signupForm.get("email");
  }
  get contactPhone(): AbstractControl | null {
    return this.signupForm.get("contactPhone");
  }

  onBtnClick() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    const formRaw = this.signupForm.getRawValue();
    const userContactInfo = {
      email: formRaw.email!,
      contactPhone: formRaw.contactPhone!,
    };
    this.userService
      .signup({
        username: formRaw.username!,
        password: formRaw.password!,
        firstName: formRaw.firstName!,
        lastName: formRaw.lastName!,
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