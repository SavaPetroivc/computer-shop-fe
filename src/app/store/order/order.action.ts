import { createAction, props } from "@ngrx/store";
import { OrderGet } from "../../shared/dto/order/order-get.model";

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
