import { createReducer, on } from "@ngrx/store";
import { cunstomIncrement, decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state";


export const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0
    };
  }),
  on(cunstomIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value
    };
  })
)



export function counterReducer(state: any, action: any){
  return _counterReducer(state, action);
}