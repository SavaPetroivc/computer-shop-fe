import { ProductCatalog } from "../../../shared/dto/product";
import { ActionReducer, createReducer, on } from "@ngrx/store";
import { getProductsSuccess } from "../product.action";

export interface ProductClientState {
  clientProducts: ProductCatalog[];
}

const initialState: ProductClientState = { clientProducts: [] };
export const clientProductReducer: ActionReducer<ProductClientState> = createReducer(
  initialState,
  on(getProductsSuccess, (state, { payload }) => {
    return { clientProducts: payload };
  }),
);
