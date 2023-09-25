import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../shared/consts";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  auth(user: { username: string; password: string }) {
    return this.http.post(`${BASE_URL}/users/auth`, user, {
      responseType: "text",
      withCredentials: true,
    });
  }

  signup(user: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    userContactInfo: {
      email: string;
      contactPhone: string;
    };
  }) {
    return this.http.post(`${BASE_URL}/users`, user, {
      responseType: "text",
    });
  }

  getUserInfo() {
    return this.http.get(`${BASE_URL}/users/me`);
  }
}
