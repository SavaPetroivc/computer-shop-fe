import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { OrderProduct } from "../shared/dto/order/order-product.model";
import { ProductCatalog } from "../shared/dto/product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private currentCart$: BehaviorSubject<OrderProduct[]> = new BehaviorSubject<
    OrderProduct[]
  >([]);
  constructor() {}

  addToCart(product: ProductCatalog): void {
    if (!this.currentCart$.value.length) {
      this.currentCart$.next([{ product, quantity: 1 }]);
    } else {
      const potentialProductIndex = this.currentCart$.value.findIndex(
        (orderProduct) => orderProduct.product.id === product.id,
      );

      if (potentialProductIndex > -1) {
        const currentCart = this.currentCart$.value;
        currentCart[potentialProductIndex].quantity += 1;
        this.currentCart$.next([...currentCart]);
      } else {
        this.currentCart$.next([
          ...this.currentCart$.value,
          { product, quantity: 1 },
        ]);
      }
    }
  }
  decrease(product: ProductCatalog): void {
    if (this.currentCart$.value.length) {
      const potentialProductIndex = this.currentCart$.value.findIndex(
        (orderProduct) => orderProduct.product.id === product.id,
      );

      if (potentialProductIndex > -1) {
        const currentCart = this.currentCart$.value;
        if (currentCart[potentialProductIndex].quantity === 1) {
          this.remove(currentCart[potentialProductIndex].product);
        } else {
          currentCart[potentialProductIndex].quantity -= 1;
          this.currentCart$.next([...currentCart]);
        }
      }
    }
  }

  remove(product: ProductCatalog): void {
    const cartWithRemovedProduct = this.currentCart$.value.filter(
      (orderProduct) => orderProduct.product.id !== product.id,
    );

    this.currentCart$.next(cartWithRemovedProduct);
  }

  getCart$(): Observable<OrderProduct[]> {
    return this.currentCart$.asObservable();
  }

  getCart(): OrderProduct[] {
    return this.currentCart$.value;
  }

  getTotalQuantity(): Observable<number> {
    return this.currentCart$.asObservable().pipe(
      map((currentCart) =>
        currentCart.reduce((total, currentValue) => {
          total += currentValue.quantity;
          return total;
        }, 0),
      ),
    );
  }
  reset() {
    this.currentCart$.next([]);
  }

  doesCartContainsProduct$(productId: number): Observable<boolean> {
    return this.currentCart$.pipe(
      map(
        (currentCart) =>
          currentCart.findIndex(
            (orderProduct) => orderProduct.product.id === productId,
          ) > -1,
      ),
    );
  }
}
