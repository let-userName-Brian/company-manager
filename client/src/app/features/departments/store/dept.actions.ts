import { createAction,props  } from "@ngrx/store";
import { Department } from "src/app/core/interfaces/department.model";

export const LOAD_DEPT = '[Dept] Load Dept';
export const LOAD_DEPT_SUCCESS = '[Dept] Load Dept Success';
export const LOAD_DEPT_FAIL = '[Dept] Load Dept Fail';

export const loadDepartments = createAction(LOAD_DEPT);
export const loadDepartmentsSuccess = createAction(LOAD_DEPT_SUCCESS, props<{ department: Department }>());