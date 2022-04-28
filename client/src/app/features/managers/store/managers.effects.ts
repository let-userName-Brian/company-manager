import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from "rxjs";
import { ManagerService } from "src/app/core/services/manager.service";
import { getManagerCount, onManagerCountFail, onManagerCountSuccess } from "./managers.actions";
;

@Injectable()
export class ManagerEffects {
  constructor(private actions$: Actions, private managerService: ManagerService) { }

  manager$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(getManagerCount),
      exhaustMap(() => {
        return this.managerService.getManagerCount().pipe(
          map((serviceCount) => {
            let managerCount = serviceCount[0].count;
            return onManagerCountSuccess({ count: managerCount });
          }),
          catchError((error): any => {
            return onManagerCountFail({ error: error });
          })
        )
      })
    );
  });

};