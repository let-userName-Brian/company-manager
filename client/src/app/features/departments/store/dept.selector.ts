import { createFeatureSelector } from "@ngrx/store";

export const DEPT_STATE_NAME = 'department';
export const getDeptState = createFeatureSelector(DEPT_STATE_NAME);