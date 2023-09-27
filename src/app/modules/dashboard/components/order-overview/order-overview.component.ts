import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { StateModel } from "../../../../store/model/state.model";
import { Observable } from "rxjs";
import { OrderGet } from "../../../../shared/dto/order/order-get.model";
import { getOrders } from "../../../../store/order/order.action";

@Component({
  selector: "app-order-overview",
  templateUrl: "./order-overview.component.html",
  styleUrls: ["./order-overview.component.scss"],
})
export class OrderOverviewComponent implements OnInit {
  displayedColumns: string[] = ["date", "total", "firstName", "lastName"];
  orders$: Observable<OrderGet[]> = this.store.select(
    (state) => state.adminOrders.orders,
  );

  constructor(private store: Store<StateModel>) {}
  view(element: OrderGet) {}

  ngOnInit(): void {
    this.store.dispatch(getOrders());
  }
}
