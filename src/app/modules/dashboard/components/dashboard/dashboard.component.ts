import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductsService } from "src/app/services/products.service";
import { ProductCatalog } from "src/app/shared/dto/product";
import { UserService } from "../../../../services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  products: ProductCatalog[] = [];
  constructor(
    private productsService: ProductsService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((response) => {
      this.products = response;
    });
    this.userService.getUserInfo().subscribe((res) => {
      console.log(res);
    });
  }
}
