import { UserService } from "../../../services/user.service";
import { catchError, Observable, of, tap, throwError } from "rxjs";
import { UserInfo } from "../models/user-info.model";
import { CurrentUserService } from "../../../services/current-user.service";

export function getUserInfoInitializer(
  userService: UserService,
  currentUserService: CurrentUserService,
): () => Observable<UserInfo> {
  return () =>
    userService.getUserInfo().pipe(
      tap((response) => currentUserService.addCurrentUser(response)),
      catchError((err) => of(err)),
    );
}
