import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from "rxjs";
import { DepartmentService } from "src/app/core/services/department.service";
import { loadDepartments, loadDepartmentsSuccess, loadDepartmentsFail, loadDeptManager, loadDeptManagerSuccess, loadDeptManagerFail } from "./dept.actions";

@Injectable()
export class DepartmentEffects {
  constructor(private actions$: Actions, private deptService: DepartmentService) { }

  //load departments
  dept$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loadDepartments),
      exhaustMap(() => {
        return this.deptService.getAllDepartments().pipe(
          map((departments) => {
            return loadDepartmentsSuccess({ departments });
          }),
          catchError((error): any => {
            return loadDepartmentsFail({ error });
          })
        );
      }));
  });

  //load department managers
  deptManager$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loadDeptManager),
      exhaustMap((action) => {
        return this.deptService.getManagersById(action.dept_no).pipe(
          map((departmentManager) => {
            return loadDeptManagerSuccess({ departmentManager });
          }),
          catchError((error): any => {
            return loadDeptManagerFail({ error });
          })
        );
      })
    );
  });
};
