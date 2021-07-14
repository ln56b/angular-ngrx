import { createSelector } from "@ngrx/store";
import { IAppState } from "../states/app.state";
import { IUserState } from "../states/user.state";

const userState = (state: IAppState) => state.users

export const selectUserList = createSelector(
  userState,
  (state: IUserState) => state.users
)

export const selectUser = createSelector(
  userState,
  (state: IUserState) => state.selectedUser
)