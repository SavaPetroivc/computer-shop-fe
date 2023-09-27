import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { StateModel } from "../../../../store/model/state.model";
import { Observable } from "rxjs";
import { OrderGet } from "../../../../shared/dto/order/order-get.model";
import { getMyOrders, getOrders } from "../../../../store/order/order.action";
import { MatDialog } from "@angular/material/dialog";
import { OrderOverviewDialogComponent } from "./order-overview-dialog/order-overview-dialog.component";
import { CurrentUserService } from "../../../../services/current-user.service";

@Component({
  selector: "app-order-overview",
  templateUrl: "./order-overview.component.html",
  styleUrls: ["./order-overview.component.scss"],
})
export class OrderOverviewComponent implements OnInit {
  displayedColumns: string[] = [
    "date",
    "total",
    "firstName",
    "lastName",
    "action",
  ];
  orders$: Observable<OrderGet[]> = this.store.select(
    (state) => state.adminOrders.orders,
  );

  constructor(
    private store: Store<StateModel>,
    private dialog: MatDialog,
    private currentUser: CurrentUserService,
  ) {}
  view(element: OrderGet) {
    this.dialog.open(OrderOverviewDialogComponent, {
      position: { right: "0" },
      width: "30%",
      height: "100vh",
      data: element,
    });
  }

  ngOnInit(): void {
    this.store.dispatch(
      this.isCurrentUserAdministrator() ? getOrders() : getMyOrders(),
    );
  }

  isCurrentUserAdministrator() {
    return this.currentUser.getCurrentUser()?.role === "ADMINISTRATOR";
  }
}
