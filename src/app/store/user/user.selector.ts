import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userAdapter, UserState } from "./user.reducer";

export const selectUserState = createFeatureSelector<UserState>("users");

const { selectAll, selectEntities, selectIds, selectTotal } =
  userAdapter.getSelectors();

export const selectAllUsers = createSelector(selectUserState, selectAll);

export const selectUserEntities = createSelector(
  selectUserState,
  selectEntities,
);

export const selectUserIds = createSelector(selectUserState, selectIds);

export const selectUsersCount = createSelector(selectUserState, selectTotal);

export const selectUserById = (id: number) =>
  createSelector(selectUserEntities, (entities) => entities[id]);
