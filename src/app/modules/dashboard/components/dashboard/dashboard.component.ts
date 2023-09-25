import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductCatalog } from "src/app/shared/dto/product";
import { CurrentUserService } from "../../../../services/current-user.service";
import { Observable } from "rxjs";
import { UserInfo } from "../../models/user-info.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  currentUser$: Observable<UserInfo | null> =
    this.currentUserService.getCurrentUser$();
  products: ProductCatalog[] = [];
  constructor(
    private currentUserService: CurrentUserService,
    private router: Router,
  ) {}

  ngOnInit() {}

  logout() {}
}
