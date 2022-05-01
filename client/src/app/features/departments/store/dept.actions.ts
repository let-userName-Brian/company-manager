import { createAction,props  } from "@ngrx/store";
import { Department, DepartmentManager } from "src/app/core/interfaces/department.model";

export const LOAD_DEPT = '[Dept] Load Dept';
export const LOAD_DEPT_SUCCESS = '[Dept] Load Dept Success';
export const LOAD_DEPT_FAIL = '[Dept] Load Dept Fail';

export const LOAD_DEPT_MANAGER = '[Dept] Load Dept Manager';
export const LOAD_DEPT_MANAGER_SUCCESS = '[Dept] Load Dept Manager Success';
export const LOAD_DEPT_MANAGER_FAIL = '[Dept] Load Dept Manager Fail';

export const loadDepartments = createAction(LOAD_DEPT);
export const loadDepartmentsSuccess = createAction(LOAD_DEPT_SUCCESS, props<{ departments: Department | any }>());
export const loadDepartmentsFail = createAction(LOAD_DEPT_FAIL, props<{ error: any }>());

export const loadDeptManager = createAction(LOAD_DEPT_MANAGER, props<{ dept_no: string }>());
export const loadDeptManagerSuccess = createAction(LOAD_DEPT_MANAGER_SUCCESS, props<{ departmentManager: DepartmentManager}>());
export const loadDeptManagerFail = createAction(LOAD_DEPT_MANAGER_FAIL, props<{ error: any }>());
