import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";
import { environment } from "src/environments/environment";

export const USER_ROLES = {
  COMPANY_ADMIN: "company_admin",
}

export const selectUser = createFeatureSelector<UserState>("user");

export const selectUserDetails = createSelector(
  selectUser,
  (state: UserState) => state.userDetails
);

export const selectUserRoles = createSelector(
  selectUserDetails,
  (userDetails) => userDetails?.[`${environment.auth.audience}/roles`]
);

export const selectIsAdmin = createSelector(selectUserRoles, (userRoles) => {
  userRoles?.includes(USER_ROLES.COMPANY_ADMIN)
});