import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { DEPT_STATE_NAME } from "./store/dept.selector";
import { departmentReducer } from "./store/dept.reducer";
import { DepartmentsComponent } from "./departments.component";
import { EffectsModule } from "@ngrx/effects";
import { DepartmentEffects } from "./store/dept.effects";
import { MatTableModule } from '@angular/material/table';
import { SelectedDeptComponent } from './selected-dept/selected-dept.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const deptRoutes: Routes = [
  { path: '', component: DepartmentsComponent }
];

@NgModule({
  declarations: [
    DepartmentsComponent,
    SelectedDeptComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule.forChild(deptRoutes),
    StoreModule.forFeature(DEPT_STATE_NAME, departmentReducer),
    EffectsModule.forFeature([DepartmentEffects]),
  ],
  exports: []

})
export class DepartmentModule { }