import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  ProductCatalog } from "../shared/dto/product";
import { BASE_URL } from "../shared/consts";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getMostPopular(): Observable<ProductCatalog[]> {
    return this.http.get<ProductCatalog[]>(`${BASE_URL}/orders/most-popular`);
  }
}
