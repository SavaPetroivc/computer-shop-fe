import { ActionReducer, createReducer, on } from "@ngrx/store";
import { Product } from "../../../shared/dto/product";
import {
  createProductSuccess,
  deleteProductSuccess,
  getAdminProductsSuccess,
  getProductsSuccess,
  updateProductSuccess,
} from "../product.action";

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
    on(deleteProductSuccess, (state, { payload }) => {
      return {
        products: state.products.filter((product) => product.id !== payload),
      };
    }),
    on(updateProductSuccess, (state, { payload }) => {
      return {
        products: state.products.map((product) =>
          product.id === payload.id ? payload : product,
        ),
      };
    }),
  );
