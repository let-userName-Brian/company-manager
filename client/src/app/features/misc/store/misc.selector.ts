import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MiscState } from "./misc.state";


export const SALARY_STATE_NAME = "salary";
export const selectSalaryState = createFeatureSelector<MiscState>(SALARY_STATE_NAME);

export const getSalaryState = createSelector(
  selectSalaryState, (state) => {
    return state;
  }
);