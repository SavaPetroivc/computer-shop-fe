import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { CurrentUserService } from "../../../services/current-user.service";
import { filter, map, tap } from "rxjs";

export const protectedGuard = (requiredRoles: string[]) => {
  return () => {
    const currentUser = inject(CurrentUserService);
    const router = inject(Router);
    return currentUser.getCurrentUser$().pipe(
      filter(Boolean),
      map(({ role }) => requiredRoles.some((reqRole) => reqRole === role)),
      tap((valid) => {
        if (!valid) {
          router.navigate(["/dashboard"]);
        }
      }),
    );
  };
};
