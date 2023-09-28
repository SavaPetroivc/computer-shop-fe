import { createAction, props } from "@ngrx/store";
import { User, UserCreate } from "../../shared/dto/user/user.model";

export const getUsers = createAction("[Users] Get");
export const getUsersSuccess = createAction(
  "[Users] Get Success",
  props<{ payload: User[] }>(),
);

export const createUser = createAction(
  "[Users] Create",
  props<{ payload: UserCreate }>(),
);
export const createUserSuccess = createAction(
  "[Users] Create User Success",
  props<{ payload: User }>(),
);

export const updateUser = createAction(
  "[Users] Update",
  props<{ payload: User }>(),
);
export const updateUserSuccess = createAction(
  "[Users] Update Success",
  props<{ payload: User }>(),
);
