import { OrderGet } from "../../shared/dto/order/order-get.model";
import { ActionReducer, createReducer, on } from "@ngrx/store";
import { getOrdersSuccess } from "./order.action";

export interface OrderAdminState {
  orders: OrderGet[];
}
const initialState: OrderAdminState = { orders: [] };
export const orderAdminReducer: ActionReducer<OrderAdminState> = createReducer(
  initialState,
  on(getOrdersSuccess, (state, { payload }) => {
    console.log(payload);
    return { orders: payload };
  }),
);
