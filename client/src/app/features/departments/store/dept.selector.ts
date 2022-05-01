import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Department } from "src/app/core/interfaces/department.model";
import { DepartmentState } from "./dept.state";

export const DEPT_STATE_NAME = 'department';
export const getDeptState = createFeatureSelector<Department>(DEPT_STATE_NAME);
export const getDeptManagers = createFeatureSelector<DepartmentState>(DEPT_STATE_NAME);

export const getDepts = createSelector(
  getDeptState, (state) => {
    return state.departments;
  }
);

export const getDeptManager = createSelector(
  getDeptManagers, (state) => {
    return state.departmentManager;
  }
)