import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../shared/consts";
import { MostPopular, Product, ProductAlter, ProductCatalog } from "../shared/dto/product";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductCatalog[]> {
    return this.http.get<ProductCatalog[]>(`${BASE_URL}/products`);
  }

  insertProduct(product: ProductAlter) {
    return this.http.post(`${BASE_URL}/products`, product, {
      responseType: "text",
    });
  }

  changeProduct(product: Product) {
    return this.http.put(`${BASE_URL}/products`, product, {
      responseType: "text",
    });
  }

  getAdminProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products`);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${BASE_URL}/products/${id}`, {
      responseType: "text",
    });
  }
}
