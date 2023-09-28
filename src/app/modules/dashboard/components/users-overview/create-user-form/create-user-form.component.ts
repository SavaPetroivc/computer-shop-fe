import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { StateModel } from "../../../../../store/model/state.model";
import { createUser } from "../../../../../store/user/user.action";
import { User, UserCreate } from "../../../../../shared/dto/user/user.model";
import { RoleService } from "../../../../../services/role.service";

@Component({
  selector: "app-create-user-form",
  templateUrl: "./create-user-form.component.html",
  styleUrls: ["./create-user-form.component.scss"],
})
export class CreateUserFormComponent {
  roles$ = this.roleService.getRoles();
  userForm = new FormGroup({
    username: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
    firstName: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
    lastName: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
    userContactInfo: new FormGroup({
      email: new FormControl("", {
        validators: Validators.required,
        nonNullable: true,
      }),
      contactPhone: new FormControl("", {
        validators: Validators.required,
        nonNullable: true,
      }),
    }),
    role: new FormControl({}, Validators.required),
  });

  constructor(
    private store: Store<StateModel>,
    private roleService: RoleService,
  ) {}

  save() {
    this.store.dispatch(
      createUser({ payload: this.userForm.getRawValue() as UserCreate }),
    );
  }
}
