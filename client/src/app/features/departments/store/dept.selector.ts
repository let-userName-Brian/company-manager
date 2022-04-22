import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Department } from "src/app/core/interfaces/department.model";

export const DEPT_STATE_NAME = 'department';
export const getDeptState = createFeatureSelector<Department>(DEPT_STATE_NAME);


export const getDepts = createSelector(
  getDeptState, (state) => {
    console.log('getDeptsSelector', state);
    return state.departments;
  }
)