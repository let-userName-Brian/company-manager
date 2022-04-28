import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ManagerState } from "src/app/features/managers/store/managers.state";

@Injectable({ providedIn: "root" })
export class ManagerService {
  constructor(private http: HttpClient) {}

  getManagerCount(): Observable<ManagerState> {
    return this.http.get<ManagerState>("http://localhost:3000/departments/total-managers");
  };
};