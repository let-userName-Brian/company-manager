import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ManagerState } from "./managers.state";


export const MANAGER_STATE_NAME = "managers";
export const selectManagersState = createFeatureSelector<ManagerState>(MANAGER_STATE_NAME);

export const getManagersCount = createSelector( 
  selectManagersState, (state) => {
    return state.count;
  }
)