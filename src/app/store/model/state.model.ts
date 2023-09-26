import { Product } from "../../shared/dto/product";
import { ProductAdminState } from "../product/product.reducer";

export interface StateModel {
  adminProducts: ProductAdminState;
}
