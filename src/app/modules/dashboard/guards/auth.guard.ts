import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { CurrentUserService } from "../../../services/current-user.service";
import { map, Observable, tap } from "rxjs";

export const authGuard: CanActivateFn = () => {
  const userService = inject(CurrentUserService);
  const router = inject(Router);
  return userService.getCurrentUser$().pipe(
    map((user) => !!user),
    tap((valid) => {
      if (!valid) {
        router.navigate(["/login"]);
      }
    }),
  ) as Observable<boolean>;
};
