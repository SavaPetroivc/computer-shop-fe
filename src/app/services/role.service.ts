import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Role } from "../shared/dto/role.model";
import { BASE_URL } from "../shared/consts";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  constructor(private http: HttpClient) {}

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${BASE_URL}/roles`);
  }
}
