import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../../../services/products.service";
import { Observable, tap } from "rxjs";
import { Product } from "../../../../../shared/dto/product";
import { Store } from "@ngrx/store";
import { getAdminProducts } from "../../../../../store/product/product.action";
import { state } from "@angular/animations";
import { StateModel } from "../../../../../store/model/state.model";

@Component({
  selector: "app-products-overview-table",
  templateUrl: "./products-overview-table.component.html",
  styleUrls: ["./products-overview-table.component.scss"],
})
export class ProductsOverviewTableComponent implements OnInit {
  products$: Observable<Product[]> = this.store.select(
    (state) => state.adminProducts.products,
  );

  displayedColumns: string[] = ["name", "price", "quantity", "action"];
  constructor(private store: Store<StateModel>) {}

  ngOnInit(): void {
    this.store.dispatch(getAdminProducts());
  }
}
