import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { DEPT_STATE_NAME } from "./store/dept.selector";
import { departmentReducer } from "./store/dept.reducer";
import { DepartmentsComponent } from "./departments.component";
import { EffectsModule } from "@ngrx/effects";
import { DepartmentEffects } from "./store/dept.effects";

const deptRoutes: Routes = [
  { path: '', component: DepartmentsComponent}
];

@NgModule({
  declarations: [
    DepartmentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(deptRoutes),
    StoreModule.forFeature(DEPT_STATE_NAME, departmentReducer),
    EffectsModule.forFeature([DepartmentEffects]),
  ],
  exports: []

})
export class DepartmentModule { }