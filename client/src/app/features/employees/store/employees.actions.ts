import { createAction, props } from "@ngrx/store";


export const LOAD_EMPLOYEES = "[Employees] Load Employees";
export const LOAD_EMPLOYEES_SUCCESS = "[Employees] Load Employees Success";
export const LOAD_EMPLOYEES_FAIL = "[Employees] Load Employees Fail";

export const getEmployeesCount = createAction(LOAD_EMPLOYEES);
export const onEmployeesCountSuccess = createAction(LOAD_EMPLOYEES_SUCCESS, props<{ count: any }>());
export const onEmployeesCountFail = createAction(LOAD_EMPLOYEES_FAIL, props<{ error: any }>());
