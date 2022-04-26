import { createReducer, on } from "@ngrx/store";
import { onEmployeesCountSuccess } from "./employees.actions";
import { initialState } from "./employees.state";

const _employeeReducer = createReducer(
  initialState,
  on(onEmployeesCountSuccess, (state, action) => {
    return {
      ...state,
      count: action.count,
    }
  })
)


export function EmployeeReducer(state: any, action: any) {
  return _employeeReducer(state, action);
}