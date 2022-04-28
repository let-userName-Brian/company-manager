import { createAction, props } from "@ngrx/store";

export const LOAD_MANAGER_COUNT = "[Managers] Load Manager Count";
export const LOAD_MANAGER_COUNT_SUCCESS = "[Managers] Load Manager Count Success";
export const LOAD_MANAGER_COUNT_FAIL = "[Managers] Load Manager Count Fail";

export const getManagerCount = createAction(LOAD_MANAGER_COUNT);
export const onManagerCountSuccess = createAction(LOAD_MANAGER_COUNT_SUCCESS, props<{ count: any }>());
export const onManagerCountFail = createAction(LOAD_MANAGER_COUNT_FAIL, props<{ error: any }>());