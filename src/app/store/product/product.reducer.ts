import { ActionReducer, createReducer, on } from "@ngrx/store";
import { Product } from "../../shared/dto/product";
import {
  createProduct,
  createProductSuccess,
  getAdminProducts,
  getAdminProductsSuccess,
} from "./product.action";

export interface ProductAdminState {
  products: Product[];
}

const initialState: ProductAdminState = { products: [] };
export const adminProductReducer: ActionReducer<ProductAdminState> =
  createReducer(
    initialState,
    on(getAdminProductsSuccess, (state, { payload }) => {
      return { products: payload };
    }),
    on(createProductSuccess, (state, { payload }) => {
      return { products: [...state.products, payload] };
    }),
  );
