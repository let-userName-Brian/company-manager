import { Injectable } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap, map } from "rxjs/operators";
import * as UserActions from "./user.actions";

@Injectable({ providedIn: "root" })
export class UserEffects {
  constructor(
    private actions$: Actions<any>,
    private authService: AuthService
  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.allNavbarActions.logoutFlowInitiated.type),
      tap(() => this.authService.loginWithRedirect())
    ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.allNavbarActions.logoutFlowInitiated.type),
      tap(() => this.authService.logout())
    ),
    { dispatch: false }
  );
}