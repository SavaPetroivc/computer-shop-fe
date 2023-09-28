import { OrderGet } from "../../shared/dto/order/order-get.model";
import { ActionReducer, createReducer, on } from "@ngrx/store";
import { getMyOrdersSuccess, getOrdersSuccess } from "./order.action";

export interface OrderAdminState {
  orders: OrderGet[];
}
const initialState: OrderAdminState = { orders: [] };
export const orderAdminReducer: ActionReducer<OrderAdminState> = createReducer(
  initialState,
  on(getOrdersSuccess  , (state, { payload }) => {
    return { orders: payload };
  }),
  on(getMyOrdersSuccess, (state, { payload }) => {
    return { orders: payload };
  }),
);
