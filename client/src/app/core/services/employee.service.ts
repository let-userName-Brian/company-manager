import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeState } from "src/app/features/employees/store/employees.state";


@Injectable({ providedIn: "root" })
export class EmployeeService {
  constructor(private https: HttpClient) {}

  getEmployeeCount(): Observable<EmployeeState>{
    return this.https.get<EmployeeState>('http://localhost:3000/employees/total'); 
  };
};