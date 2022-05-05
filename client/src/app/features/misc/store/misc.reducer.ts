import { createReducer, on } from "@ngrx/store";
import { getTotalSalaryCountFail, getTotalSalaryCountSuccess } from "./misc.actions";
import { initialState } from "./misc.state";

const _miscReducer = createReducer(
  initialState,
  on(getTotalSalaryCountSuccess, (state, action) => {
    return {
      ...state,
      totalSalaryCount: action.totalSalaryCount,
      averageSalary: action.averageSalary,
      minSalary: action.minSalary,
      maxSalary: action.maxSalary,
    };
  }),
  on(getTotalSalaryCountFail, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);


export function MiscReducer(state: any, action: any) {
  return _miscReducer(state, action);
};