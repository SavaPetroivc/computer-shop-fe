import { Product } from "../../shared/dto/product";
import { ProductAdminState } from "../product/reducers/admin-product.reducer";
import { ProductClientState } from "../product/reducers/product.reducer";
import { OrderAdminState } from "../order/order-admin.reducer";
import { UserState } from "../user/user.reducer";

export interface StateModel {
  adminProducts: ProductAdminState;
  clientProducts: ProductClientState;
  adminOrders: OrderAdminState;
  users: UserState;
}
