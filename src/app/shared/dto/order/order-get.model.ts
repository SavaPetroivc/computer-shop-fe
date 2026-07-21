import { ProductsInOrder } from "./products-in-order.model";
import { OrderDeliveryGet } from "./order-delivery.model";
import { UserOrderCreated } from "./user-order-created.model";
import { OrderStatus } from "../../enum/order-status.enum";

export interface OrderGet {
  id: number;
  date: string;
  total: number;
  status: OrderStatus;
  orderProducts: ProductsInOrder[];
  user: UserOrderCreated;
  orderDeliveryInfo: OrderDeliveryGet;
}
