import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { Department } from "src/app/core/interfaces/department.model";
import { DepartmentService } from "src/app/core/services/department.service";
import { loadDepartments, loadDepartmentsSuccess } from "./dept.actions";

@Injectable()
export class DepartmentEffects {
  constructor(private actions$: Actions, private store: Store, private deptService: DepartmentService) { }

  dept$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loadDepartments),
      exhaustMap(() => {
        return this.deptService.getAllDepartments().pipe(
          map((department: Department) => {
            this.store.dispatch(loadDepartmentsSuccess({ department }));
          })
        );
      }));
  });
};
