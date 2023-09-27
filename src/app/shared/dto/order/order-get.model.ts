import { ProductsInOrder } from "./products-in-order.model";
import { OrderDeliveryGet } from "./order-delivery.model";
import { UserOrderCreated } from "./user-order-created.model";

export interface OrderGet {
  id: number;
  date: number;
  total: number;
  orderProducts: ProductsInOrder[];
  user: UserOrderCreated;
  orderDeliveryInfo: OrderDeliveryGet;
}
