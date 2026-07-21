import { Injectable } from "@angular/core";
import { ProductsService } from "../../services/products.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, of, switchMap, tap } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
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

  getProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(ProductActions.getProducts),
      switchMap(() =>
        this.productService
          .getProducts()
          .pipe(
            map((response) =>
              ProductActions.getProductsSuccess({ payload: response }),
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
            switchMap((response) =>
              of(
                ProductActions.deleteProductSuccess({ payload: payload }),
                ProductActions.getProducts(),
              ),
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
  notifyUpdate$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(ProductActions.updateProductSuccess),
        tap(() =>
          this.snackBar.open("Product updated successfully", "OK", {
            duration: 3000,
          }),
        ),
      ),
    { dispatch: false },
  );

  notifyCreate$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(ProductActions.createProductSuccess),
        tap(() =>
          this.snackBar.open("Product created successfully", "OK", {
            duration: 3000,
          }),
        ),
      ),
    { dispatch: false },
  );

  constructor(
    private productService: ProductsService,
    private actions: Actions,
    private snackBar: MatSnackBar,
  ) {}
}
