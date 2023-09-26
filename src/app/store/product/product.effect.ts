import { Injectable } from "@angular/core";
import { ProductsService } from "../../services/products.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {  map, switchMap } from "rxjs";
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
  constructor(
    private productService: ProductsService,
    private actions: Actions,
  ) {}
}
