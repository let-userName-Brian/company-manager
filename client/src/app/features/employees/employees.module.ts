import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { EmployeeReducer } from "./store/employees.reducer";
import { EmployeeEffects } from "./store/employees.effects";
import { EMP_STATE_NAME } from "./store/employees.selector";
import { EmployeesComponent } from "./employees.component";

const employeesRoutes: Routes = [
  { path: "", component: EmployeesComponent }
];

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(employeesRoutes),
    StoreModule.forFeature(EMP_STATE_NAME, EmployeeReducer),
    EffectsModule.forFeature([EmployeeEffects]),
  ],
  exports: [],
})
export class EmployeeModule { }
