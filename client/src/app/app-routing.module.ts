import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './features/employees/employees.component';
import { LoginComponent } from './features/login/login.component';
import { ManagersComponent } from './features/managers/managers.component';
import { MetricsComponent } from './features/metrics/metrics.component';
import { MiscComponent } from './features/misc/misc.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'metrics', component: MetricsComponent },
  { path: 'departments', loadChildren: () => import('./features/departments/department.module').then(m => m.DepartmentModule) },
  { path: 'managers', component: ManagersComponent },
  { path: 'employees', loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeeModule) },
  { path: 'misc', component: MiscComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
