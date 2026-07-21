import { catchError, lastValueFrom, of, tap } from "rxjs";
import { UserService } from "./services/user.service";
import { CurrentUserService } from "./services/current-user.service";

export function initCurrentUser(
  userService: UserService,
  currentUserService: CurrentUserService,
): () => Promise<unknown> {
  return () => {
    if (!currentUserService.hasStoredSession()) {
      return Promise.resolve(null);
    }
    return lastValueFrom(
      userService.getUserInfo().pipe(
        tap((user) => currentUserService.addCurrentUser(user)),
        catchError(() => {
          currentUserService.clearCurrentUser();
          return of(null);
        }),
      ),
    );
  };
}
