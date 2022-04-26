import { createReducer, on } from "@ngrx/store";
import { onEmployeesCountFail, onEmployeesCountSuccess } from "./employees.actions";
import { initialState } from "./employees.state";

const _employeeReducer = createReducer(
  initialState,
  on(onEmployeesCountSuccess, (state, action) => {
    console.log("action", action);
    return {
      ...state,
      count: action.count,
    }
  }),
  on(onEmployeesCountFail, (state, action) => {
    console.log("action", action);
    return {
      ...state,
      error: action.error,
    }
  })
)


export function EmployeeReducer(state: any, action: any) {
  return _employeeReducer(state, action);
}