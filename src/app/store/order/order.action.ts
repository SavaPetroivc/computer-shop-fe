import { createAction, props } from "@ngrx/store";
import { OrderGet } from "../../shared/dto/order/order-get.model";
import { OrderStatus } from "../../shared/enum/order-status.enum";

export const getOrders = createAction("[Orders] Get All");
export const getOrdersSuccess = createAction(
  "[Orders] Get All Success",
  props<{ payload: OrderGet[] }>(),
);

export const getMyOrders = createAction("[Orders] Get My All");
export const getMyOrdersSuccess = createAction(
  "[Orders] Get My All Success",
  props<{ payload: OrderGet[] }>(),
);

export const updateOrderStatus = createAction(
  "[Orders] Update Status",
  props<{ id: number; status: OrderStatus }>(),
);
export const updateOrderStatusSuccess = createAction(
  "[Orders] Update Status Success",
  props<{ id: number; status: OrderStatus }>(),
);
