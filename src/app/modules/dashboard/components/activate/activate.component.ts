import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { UserService } from "../../../../services/user.service";

@Component({
  selector: "app-activate",
  templateUrl: "./activate.component.html",
  styleUrls: ["./activate.component.scss"],
})
export class ActivateComponent {
  password = new FormControl("", {
    validators: [Validators.required, Validators.min(6)],
    nonNullable: true,
  });
  constructor(private userService: UserService) {}
  changePassword() {
    this.userService.changePassword(this.password.value).subscribe(() => {});
  }
}
