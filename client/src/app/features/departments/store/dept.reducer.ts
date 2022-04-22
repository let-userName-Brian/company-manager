import { createReducer, on } from "@ngrx/store";
import { initialState } from "./dept.state";
import { loadDepartmentsSuccess, loadDepartmentsFail } from "./dept.actions";


const _departmentReducer = createReducer(
  initialState,
  on(loadDepartmentsSuccess, (state, action) => {
    console.log('loadDepartmentsSuccess', action);
    return {
      ...state,
      departments: action.departments
    };
  }),
  on(loadDepartmentsFail, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  })
);


export function departmentReducer(state: any, action: any) {
  return _departmentReducer(state, action);
}