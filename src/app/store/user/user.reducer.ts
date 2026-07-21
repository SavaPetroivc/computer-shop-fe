import { User } from "../../shared/dto/user/user.model";
import { ActionReducer, createReducer, on } from "@ngrx/store";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import {
  createUserSuccess,
  getUsersSuccess,
  updateUserSuccess,
} from "./user.action";

export interface UserState extends EntityState<User> {}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

const initialState: UserState = userAdapter.getInitialState();

export const userReducer: ActionReducer<UserState> = createReducer(
  initialState,
  on(getUsersSuccess, (state, { payload }) =>
    userAdapter.setAll(payload, state),
  ),
  on(createUserSuccess, (state, { payload }) =>
    userAdapter.addOne(payload, state),
  ),
  on(updateUserSuccess, (state, { payload }) =>
    userAdapter.updateOne({ id: payload.id, changes: payload }, state),
  ),
);
