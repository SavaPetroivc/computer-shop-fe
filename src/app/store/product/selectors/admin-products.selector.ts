import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adminProductReducer, ProductAdminState } from "../product.reducer";

const adminProductsSelector =
  createFeatureSelector<ProductAdminState>("products");
export const getAdminProductsSelector = createSelector(
  adminProductsSelector,
  (state) => state.products,
);
