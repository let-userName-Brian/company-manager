import { createAction, props } from "@ngrx/store";


export const LOAD_EMPLOYEE_COUNT = "[Employees] Load Employee Count";
export const LOAD_EMPLOYEE_COUNT_SUCCESS = "[Employees] Load Employee Count Success";
export const LOAD_EMPLOYEE_COUNT_FAIL = "[Employees] Load Employee Count Fail";

export const getEmployeesCount = createAction(LOAD_EMPLOYEE_COUNT);
export const onEmployeesCountSuccess = createAction(LOAD_EMPLOYEE_COUNT_SUCCESS, props<{ count: any }>());
export const onEmployeesCountFail = createAction(LOAD_EMPLOYEE_COUNT_FAIL, props<{ error: any }>());
