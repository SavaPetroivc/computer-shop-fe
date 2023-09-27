import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../shared/consts";
import { Product, ProductAlter, ProductCatalog } from "../shared/dto/product";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductCatalog[]> {
    return this.http.get<ProductCatalog[]>(`${BASE_URL}/products`);
  }

  getProductsAdmin(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products/administrators`);
  }

  insertProduct(product: ProductAlter): Observable<Product> {
    return this.http.post<Product>(`${BASE_URL}/products`, product);
  }

  changeProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${BASE_URL}/products`, product);
  }

  getAdminProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${BASE_URL}/products/${id}`, {
      responseType: "text",
    });
  }
}
