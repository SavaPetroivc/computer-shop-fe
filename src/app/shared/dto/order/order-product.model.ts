import { ProductCatalog } from "../product";

export interface OrderProduct {
  product: ProductCatalog;
  quantity: number;
}
