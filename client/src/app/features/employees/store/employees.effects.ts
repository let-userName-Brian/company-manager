import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map } from "rxjs";
import { EmployeeService } from "src/app/core/services/employee.service";
import { getEmployeesCount, onEmployeesCountFail, onEmployeesCountSuccess } from "./employees.actions";

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private store: Store, private empService: EmployeeService) { }

  emp$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(getEmployeesCount),
      exhaustMap(() => {
        return this.empService.getEmployeeCount().pipe(
          map((serviceCount) => {
            let count = serviceCount[0].count;
            return onEmployeesCountSuccess({ count: count });
          }),
          catchError((error): any => {
            return onEmployeesCountFail({error: error});
          })
        )
      })
    );
  });
};