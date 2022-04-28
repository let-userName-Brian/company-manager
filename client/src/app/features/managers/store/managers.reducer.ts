import { createReducer, on } from "@ngrx/store";
import { onManagerCountFail, onManagerCountSuccess } from "./managers.actions";
import { initialState } from "./managers.state";


const _managerReducer = createReducer(
  initialState,
  on(onManagerCountSuccess, (state, action) => {
    return {
      ...state,
      count: action.count,
    }
  }),
  on(onManagerCountFail, (state, action) => {
    return {
      ...state,
      error: action.error,
    }
  })
);

export function ManagerReducer(state: any, action: any) {
  return _managerReducer(state, action);
}