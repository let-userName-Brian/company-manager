import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { initialState, UserState } from './user.state';

const useReducer = createReducer(
  initialState,
  on(UserActions.userChangedFromAuth0SDK, (state, { user }) => ({ //should be userDetials, but user works-ish?
    ...state,
    userDetails: user,
  }))
);

export function reducer( state: UserState | undefined, action: Action){
  return useReducer(state, action);
}