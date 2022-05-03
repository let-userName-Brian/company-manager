import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MiscState } from "src/app/features/misc/store/misc.state";

@Injectable({ providedIn: "root" })
export class MiscService{
  constructor( private http: HttpClient){}

  getSalaryOverview(): Observable<MiscState>{
    return this.http.get<MiscState>("http://localhost:3000/salaries/overview");
  };
};