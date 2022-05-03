import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from "rxjs";
import { MiscService } from "src/app/core/services/misc.service";
import { getTotalSalaryCount, getTotalSalaryCountFail, getTotalSalaryCountSuccess } from "./misc.actions";


@Injectable()
export class MiscEffects {
  constructor(private actions$: Actions, private miscService: MiscService) { }

  getTotalSalaryCount$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(getTotalSalaryCount),
      exhaustMap(()=> {
        return this.miscService.getSalaryOverview().pipe(
          map((serviceCount) => {
            let totalSalaryCount = serviceCount[0].total;
            let averageSalary = serviceCount[0].average_salary;
            let minSalary = serviceCount[0].minimum_salary;
            let maxSalary = serviceCount[0].max_salary;
            return getTotalSalaryCountSuccess({ totalSalaryCount: totalSalaryCount, averageSalary: averageSalary, minSalary: minSalary, maxSalary: maxSalary });
          }),
          catchError((error): any => {
            return getTotalSalaryCountFail({ error: error });
          })
        );
      })
    );
  });
};