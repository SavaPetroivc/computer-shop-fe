import { createAction, props } from "@ngrx/store";
import {
  Product,
  ProductAlter,
  ProductCatalog,
} from "../../shared/dto/product";

export const getAdminProducts = createAction("[Products] Get Admin");
export const getAdminProductsSuccess = createAction(
  "[Products] Get Admin Success",
  props<{ payload: Product[] }>(),
);

export const getProducts = createAction("[Products] Get");
export const getProductsSuccess = createAction(
  "[Products] Get Success",
  props<{ payload: ProductCatalog[] }>(),
);

export const createProduct = createAction(
  "[Products] Create",
  props<{ payload: ProductAlter }>(),
);
export const createProductSuccess = createAction(
  "[Products] Create Product Success",
  props<{ payload: Product }>(),
);

export const updateProduct = createAction(
  "[Products] Update",
  props<{ payload: Product }>(),
);
export const updateProductSuccess = createAction(
  "[Products] Update Success",
  props<{ payload: Product }>(),
);

export const deleteProduct = createAction(
  "[Products] Delete Product",
  props<{ payload: number }>(),
);

export const deleteProductSuccess = createAction(
  "[Products] Delete Product Success",
  props<{ payload: number }>(),
);
