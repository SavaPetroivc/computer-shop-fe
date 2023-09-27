import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product, ProductCatalog } from "../../shared/dto/product";
import { Store } from "@ngrx/store";
import { StateModel } from "../../store/model/state.model";
import { state } from "@angular/animations";
import {
  getAdminProducts,
  getProducts,
} from "../../store/product/product.action";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"],
})
export class AllProductsComponent implements OnInit {
  products$: Observable<ProductCatalog[]> = this.store.select(
    (state) => state.clientProducts.clientProducts,
  );

  constructor(
    private store: Store<StateModel>,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getProducts());

  }
}
