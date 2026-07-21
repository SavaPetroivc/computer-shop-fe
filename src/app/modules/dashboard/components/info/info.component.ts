import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { UserService } from "../../../../services/user.service";
import { CurrentUserService } from "../../../../services/current-user.service";
import { CityService } from "../../../../services/city.service";

type City = { id: number; name: string };

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
})
export class InfoComponent implements OnInit {
  cities$: Observable<City[]> = this.cityService.getCities();
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
    street: new FormControl("", { nonNullable: true }),
    number: new FormControl("", { nonNullable: true }),
    zip: new FormControl("", { nonNullable: true }),
    city: new FormControl<City | null>(null),
    password: new FormControl("", {
      validators: Validators.minLength(6),
      nonNullable: true,
    }),
  });

  constructor(
    private userService: UserService,
    private currentUserService: CurrentUserService,
    private cityService: CityService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((user) => {
      this.profileForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.userContactInfo?.email,
        contactPhone: user.userContactInfo?.contactPhone,
        street: user.userContactInfo?.street ?? "",
        number: user.userContactInfo?.number ?? "",
        zip: user.userContactInfo?.zip ?? "",
        city: user.userContactInfo?.city ?? null,
      });
    });
  }

  compareCities = (a: City | null, b: City | null): boolean =>
    a?.id === b?.id;

  save(): void {
    if (this.profileForm.invalid) {
      return;
    }
    const value = this.profileForm.getRawValue();

    this.userService
      .updateProfile({
        firstName: value.firstName,
        lastName: value.lastName,
        userContactInfo: {
          email: value.email,
          contactPhone: value.contactPhone,
          street: value.street,
          number: value.number,
          zip: value.zip,
          city: value.city ? { id: value.city.id } : null,
        },
      })
      .subscribe({
        next: () => this.onProfileSaved(value),
        error: () =>
          this.snackBar.open("Failed to update profile.", "Close", {
            duration: 4000,
          }),
      });
  }

  private onProfileSaved(value: ReturnType<typeof this.profileForm.getRawValue>): void {
    const current = this.currentUserService.getCurrentUser();
    if (current) {
      this.currentUserService.addCurrentUser({
        ...current,
        firstName: value.firstName,
        lastName: value.lastName,
        userContactInfo: {
          email: value.email,
          contactPhone: value.contactPhone,
          street: value.street,
          number: value.number,
          zip: value.zip,
          city: value.city,
        },
      });
    }

    if (!value.password) {
      this.snackBar.open("Profile updated.", "Close", { duration: 3000 });
      return;
    }

    this.userService.changePassword(value.password).subscribe({
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
