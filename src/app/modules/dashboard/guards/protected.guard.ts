import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { CurrentUserService } from "../../../services/current-user.service";
import { filter, map, take } from "rxjs";
import { RoleEnum } from "../../../shared/enum/role.enum";

export const protectedGuard = (requiredRoles: RoleEnum[]) => {
  return () => {
    const currentUser = inject(CurrentUserService);
    const router = inject(Router);
    return currentUser.getCurrentUser$().pipe(
      filter(Boolean),
      take(1),
      map(({ role, activated }) => {
        if (!activated) {
          return router.createUrlTree(["/dashboard/activate"]);
        }
        if (requiredRoles.some((reqRole) => reqRole === role)) {
          return true;
        }
        return router.createUrlTree(["/"]);
      }),
    );
  };
};
