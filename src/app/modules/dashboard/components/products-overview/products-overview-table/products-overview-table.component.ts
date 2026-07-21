import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../../../../../shared/dto/product";
import { Store } from "@ngrx/store";
import {
  deleteProduct,
  getAdminProducts,
} from "../../../../../store/product/product.action";
import { StateModel } from "../../../../../store/model/state.model";
import { CurrentUserService } from "../../../../../services/current-user.service";

@Component({
  selector: "app-products-overview-table",
  templateUrl: "./products-overview-table.component.html",
  styleUrls: ["./products-overview-table.component.scss"],
})
export class ProductsOverviewTableComponent implements OnInit {
  @Output() onProductEdit = new EventEmitter<Product>();
  products$: Observable<Product[]> = this.store.select(
    (state) => state.adminProducts.products,
  );

  isCurrentUserAdministrator$ = this.currentUserService
    .getCurrentUser$()
    .pipe(map((currUser) => currUser?.role === "ADMINISTRATOR"));

  displayedColumns: string[] = ["name", "price", "quantity", "action"];
  constructor(
    private store: Store<StateModel>,
    private currentUserService: CurrentUserService,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getAdminProducts());
  }

  delete(id: number) {
    this.store.dispatch(deleteProduct({ payload: id }));
  }
}
