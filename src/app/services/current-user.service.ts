import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserInfo } from "../modules/dashboard/models/user-info.model";

@Injectable({
  providedIn: "root",
})
export class CurrentUserService {
  private readonly SESSION_FLAG = "hasSession";
  private currentUser$: BehaviorSubject<UserInfo | null> =
    new BehaviorSubject<UserInfo | null>(null);
  constructor() {}

  addCurrentUser(currUser: UserInfo): void {
    localStorage.setItem(this.SESSION_FLAG, "1");
    this.currentUser$.next(currUser);
  }

  clearCurrentUser(): void {
    localStorage.removeItem(this.SESSION_FLAG);
    this.currentUser$.next(null);
  }

  hasStoredSession(): boolean {
    return localStorage.getItem(this.SESSION_FLAG) === "1";
  }

  getCurrentUser$(): Observable<UserInfo | null> {
    return this.currentUser$.asObservable();
  }

  getCurrentUser(): UserInfo | null {
    return this.currentUser$.value;
  }
}
