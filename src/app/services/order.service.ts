import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductCatalog } from "../shared/dto/product";
import { BASE_URL } from "../shared/consts";
import { HttpClient } from "@angular/common/http";
import { OrderCreate } from "../shared/dto/order/order-create.model";
import { OrderGet } from "../shared/dto/order/order-get.model";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getMostPopular(): Observable<ProductCatalog[]> {
    return this.http.get<ProductCatalog[]>(`${BASE_URL}/orders/most-popular`);
  }

  makeOrder(orderCreate: OrderCreate): Observable<any> {
    return this.http.post(`${BASE_URL}/orders`, orderCreate, {
      responseType: "text",
    });
  }

  getOrders(): Observable<OrderGet[]> {
    return this.http.get<OrderGet[]>(`${BASE_URL}/orders`);
  }
}
