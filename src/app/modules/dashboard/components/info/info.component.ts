import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "../../../../services/user.service";
import { CurrentUserService } from "../../../../services/current-user.service";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
})
export class InfoComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
    lastName: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
    email: new FormControl("", {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    contactPhone: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
    password: new FormControl("", {
      validators: Validators.minLength(6),
      nonNullable: true,
    }),
  });

  constructor(
    private userService: UserService,
    private currentUserService: CurrentUserService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((user) => {
      this.profileForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.userContactInfo?.email,
        contactPhone: user.userContactInfo?.contactPhone,
      });
    });
  }

  save(): void {
    if (this.profileForm.invalid) {
      return;
    }
    const { firstName, lastName, email, contactPhone, password } =
      this.profileForm.getRawValue();

    this.userService
      .updateProfile({
        firstName,
        lastName,
        userContactInfo: { email, contactPhone },
      })
      .subscribe({
        next: () => this.onProfileSaved(firstName, lastName, email, contactPhone, password),
        error: () =>
          this.snackBar.open("Failed to update profile.", "Close", {
            duration: 4000,
          }),
      });
  }

  private onProfileSaved(
    firstName: string,
    lastName: string,
    email: string,
    contactPhone: string,
    password: string,
  ): void {
    const current = this.currentUserService.getCurrentUser();
    if (current) {
      this.currentUserService.addCurrentUser({
        ...current,
        firstName,
        lastName,
        userContactInfo: { email, contactPhone },
      });
    }

    if (!password) {
      this.snackBar.open("Profile updated.", "Close", { duration: 3000 });
      return;
    }

    this.userService.changePassword(password).subscribe({
      next: () => {
        this.profileForm.controls.password.reset("");
        this.snackBar.open("Profile and password updated.", "Close", {
          duration: 3000,
        });
      },
      error: () =>
        this.snackBar.open(
          "Profile saved, but the password could not be changed.",
          "Close",
          { duration: 4000 },
        ),
    });
  }
}
