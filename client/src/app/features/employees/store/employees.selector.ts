import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState } from "./employees.state";


export const EMP_STATE_NAME = "employees";
export const selectEmployeesState = createFeatureSelector<EmployeeState>(EMP_STATE_NAME);


export const getEmps = createSelector(
  selectEmployeesState, (state) => {
    return state.count;
  }
)