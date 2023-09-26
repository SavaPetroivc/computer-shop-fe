import { Component } from "@angular/core";
import { OrderService } from "../../services/order.service";
import { Observable } from "rxjs";
import {  ProductCatalog } from "../../shared/dto/product";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {

  mostPopular$:Observable<ProductCatalog[]> = this.orderService.getMostPopular()
  constructor(private orderService: OrderService) {}
}
