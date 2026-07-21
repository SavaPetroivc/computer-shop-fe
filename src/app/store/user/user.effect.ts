import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from "../user/user.action";
import { map, of, switchMap } from "rxjs";
import { UserService } from "../../services/user.service";

@Injectable()
export class UserEffect {
  getUsers$ = createEffect(() =>
    this.actions.pipe(
      ofType(UserActions.getUsers),
      switchMap(() =>
        this.usersService
          .getUsers()
          .pipe(
            map((response) =>
              UserActions.getUsersSuccess({ payload: response }),
            ),
          ),
      ),
    ),
  );

  createUser$ = createEffect(() =>
    this.actions.pipe(
      ofType(UserActions.createUser),
      switchMap(({ payload }) =>
        this.usersService
          .createUserAsAdmin(payload)
          .pipe(
            switchMap((response) => [
              UserActions.createUserSuccess({ payload: response }),
              UserActions.getUsers(),
            ]),
          ),
      ),
    ),
  );

  updateUser$ = createEffect(() =>
    this.actions.pipe(
      ofType(UserActions.updateUser),
      switchMap(({ payload }) =>
        this.usersService
          .updateUser(payload)
          .pipe(
            switchMap((response) => [
              UserActions.updateUserSuccess({ payload: payload }),
              UserActions.getUsers(),
            ]),
          ),
      ),
    ),
  );

  constructor(
    private usersService: UserService,
    private actions: Actions,
  ) {}
}
