import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Department } from "../interfaces/department.model";

@Injectable({ providedIn: "root" })
export class DepartmentService {
  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<Department> {
    return this.http.get<Department>('http://localhost:3000/departments');
  }
}