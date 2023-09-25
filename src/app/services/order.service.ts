import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MostPopular } from "../shared/dto/product";
import { BASE_URL } from "../shared/consts";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getMostPopular(): Observable<MostPopular[]> {
    return this.http.get<MostPopular[]>(`${BASE_URL}/orders/most-popular`);
  }
}
