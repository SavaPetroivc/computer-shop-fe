import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { CurrentUserService } from "../../../services/current-user.service";
import { filter, map, tap } from "rxjs";
import { RoleEnum } from "../../../shared/enum/role.enum";

export const protectedGuard = (requiredRoles: RoleEnum[]) => {
  console.log(requiredRoles);
  return () => {
    const currentUser = inject(CurrentUserService);
    const router = inject(Router);
    return currentUser.getCurrentUser$().pipe(
      filter(Boolean),
      map(
        ({ role, activated }) =>
          requiredRoles.some((reqRole) => {
            if (!activated) {
              router.navigate(["/dashboard/activate"]);
              return false;
            }
            return reqRole === role;
          }),
        tap((valid) => {
          if (!valid) {
            router.navigate(["/"]);
          }
        }),
      ),
    );
  };
};
