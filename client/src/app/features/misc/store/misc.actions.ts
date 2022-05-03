import { createAction, props } from "@ngrx/store";


const GET_TOTAL_SALARY_COUNT = 'GET_TOTAL_SALARY_COUNT';
const GET_TOTAL_SALARY_COUNT_SUCCESS = 'GET_TOTAL_SALARY_COUNT_SUCCESS';
const GET_TOTAL_SALARY_COUNT_FAIL = 'GET_TOTAL_SALARY_COUNT_FAIL';

export const getTotalSalaryCount = createAction(GET_TOTAL_SALARY_COUNT);
export const getTotalSalaryCountSuccess = createAction(GET_TOTAL_SALARY_COUNT_SUCCESS, props<{ totalSalaryCount: number, averageSalary: number, minSalary: number, maxSalary: number }>());
export const getTotalSalaryCountFail = createAction(GET_TOTAL_SALARY_COUNT_FAIL, props<{ error: any }>());  