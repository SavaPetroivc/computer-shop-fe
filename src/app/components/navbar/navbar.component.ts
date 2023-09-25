import { Component } from "@angular/core";
import { CurrentUserService } from "../../services/current-user.service";
import { map } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  authenticated$ = this.currentUserService
    .getCurrentUser$()
    .pipe(map((user) => !!user));
  constructor(private currentUserService: CurrentUserService) {}
}
