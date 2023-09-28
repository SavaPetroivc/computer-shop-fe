import { User } from "../../shared/dto/user/user.model";
import { ActionReducer, createReducer, on } from "@ngrx/store";
import { OrderAdminState } from "../order/order-admin.reducer";
import {
  createUserSuccess,
  getUsersSuccess,
  updateUserSuccess,
} from "./user.action";

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userReducer: ActionReducer<UserState> = createReducer(
  initialState,
  on(getUsersSuccess, (state, { payload }) => {
    return { users: payload };
  }),
  on(createUserSuccess, (state, { payload }) => {
    return { users: [...state.users, payload] };
  }),
  on(updateUserSuccess, (state, { payload }) => {
    return {
      users: state.users.map((user) =>
        user.id === payload.id ? payload : user,
      ),
    };
  }),
);
