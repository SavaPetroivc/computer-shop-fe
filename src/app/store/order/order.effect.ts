import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as OrderActions from "./order.action";
import { map, switchMap } from "rxjs";
import { OrderService } from "../../services/order.service";

@Injectable()
export class OrderEffect {
  getAdminOrders$ = createEffect(() =>
    this.actions.pipe(
      ofType(OrderActions.getOrders),
      switchMap(() =>
        this.orderService
          .getOrders()
          .pipe(
            map((response) =>
              OrderActions.getOrdersSuccess({ payload: response }),
            ),
          ),
      ),
    ),
  );

  constructor(
    private orderService: OrderService,
    private actions: Actions,
  ) {}
}
