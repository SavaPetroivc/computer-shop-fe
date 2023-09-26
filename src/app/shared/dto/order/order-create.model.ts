import { OrderProduct } from "./order-product.model";
import { OrderDelivery } from "./order-delivery.model";

export interface OrderCreate{
  orderProducts:OrderProduct[]
  orderDelivery:OrderDelivery
}
