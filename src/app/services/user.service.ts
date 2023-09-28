import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../shared/consts";
import { Observable } from "rxjs";
import { UserInfo } from "../modules/dashboard/models/user-info.model";
import { User, UserCreate } from "../shared/dto/user/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  auth(user: { username: string; password: string }): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${BASE_URL}/users/auth`, user);
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

  getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${BASE_URL}/users/me`);
  }

  createUser(user: UserCreate): Observable<User> {
    return this.http.post<User>(`${BASE_URL}/users`, user);
  }

  createUserAsAdmin(user: UserCreate): Observable<User> {
    return this.http.post<User>(`${BASE_URL}/users/with-role`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.post<User>(`${BASE_URL}/users/${user.id}`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}/users`);
  }

  changePassword(password: string): Observable<string> {
    return this.http.put(
      `${BASE_URL}/users/password/me`,
      {
        password,
      },
      { responseType: "text" },
    );
  }
}
