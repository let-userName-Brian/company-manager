import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs";
import { selectUserRoles } from "../state/user";

@Injectable({ providedIn: "root" })
export class UserRoleGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectUserRoles).pipe(
      map(roles => {
        if (roles && roles.includes(route?.data?.["role"])) {
          return true;
        }
        this.router.navigate(["/"]);
        return false
      }),
      catchError((err) => {
        this.router.navigate(["/"]);
        return of(false);
      })
    )
  }
}