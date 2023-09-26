import { Injectable } from "@angular/core";
import { ProductsService } from "../../services/products.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import * as ProductActions from "./product.action";

@Injectable()
export class ProductEffect {
  getAdminProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(ProductActions.getAdminProducts),
      switchMap(() =>
        this.productService
          .getProductsAdmin()
          .pipe(
            map((response) =>
              ProductActions.getAdminProductsSuccess({ payload: response }),
            ),
          ),
      ),
    ),
  );

  createProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(ProductActions.createProduct),
      switchMap(({ payload }) =>
        this.productService
          .insertProduct(payload)
          .pipe(
            map((response) =>
              ProductActions.createProductSuccess({ payload: response }),
            ),
          ),
      ),
    ),
  );

  deleteProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(ProductActions.deleteProduct),
      switchMap(({ payload }) =>
        this.productService
          .deleteProduct(payload)
          .pipe(
            map((response) =>
              ProductActions.deleteProductSuccess({ payload: payload }),
            ),
          ),
      ),
    ),
  );

  updateProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(ProductActions.updateProduct),
      switchMap(({ payload }) =>
        this.productService
          .changeProduct(payload)
          .pipe(
            map((response) =>
              ProductActions.updateProductSuccess({ payload: payload }),
            ),
          ),
      ),
    ),
  );
  constructor(
    private productService: ProductsService,
    private actions: Actions,
  ) {}
}
