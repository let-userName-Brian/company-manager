import { createReducer, on } from "@ngrx/store";
import { initialState } from "./dept.state";
import { loadDepartmentsSuccess } from "./dept.actions";


const _departmentReducer = createReducer(
  initialState,
  on(loadDepartmentsSuccess, (state, action) => {
    return {
      ...state,
      department: action
    };
  }))


export function departmentReducer(state: any, action: any) {
  return _departmentReducer(state, action);
}