import { Component, EventEmitter, Output } from "@angular/core";
import { User } from "../../../../shared/dto/user/user.model";
import { CreateUserFormComponent } from "./create-user-form/create-user-form.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-users-overview",
  templateUrl: "./users-overview.component.html",
  styleUrls: ["./users-overview.component.scss"],
})
export class UsersOverviewComponent {
  constructor(private dialog: MatDialog) {}
  openCreateForm(user?: User) {
    this.dialog.open(CreateUserFormComponent, {
      data: user,
      position: { right: "0" },
      width: "20%",
      height: "100vh",
    });
  }
}
