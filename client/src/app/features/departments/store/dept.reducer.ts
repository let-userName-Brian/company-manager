import { createReducer, on } from "@ngrx/store";
import { initialState } from "./dept.state";
import { loadDepartmentsSuccess, loadDepartmentsFail, loadDeptManagerSuccess, loadDeptManagerFail } from "./dept.actions";


const _departmentReducer = createReducer(
  initialState,
  on(loadDepartmentsSuccess, (state, action) => {
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
  }),
  on(loadDeptManagerSuccess, (state, action) => {
    return {
      ...state,
      departmentManager: action.departmentManager
    }
  }),
  on(loadDeptManagerFail, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  })
);


export function departmentReducer(state: any, action: any) {
  return _departmentReducer(state, action);
}