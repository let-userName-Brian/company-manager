import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { MetricsComponent } from './features/metrics/metrics.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'metrics', component: MetricsComponent },
  { path: 'departments', loadChildren: () => import('./features/departments/department.module').then(m => m.DepartmentModule) },
  { path: 'managers', loadChildren: () => import('./features/managers/manager.module').then(m => m.ManagerModule) },
  { path: 'employees', loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeeModule) },
  { path: 'misc', loadChildren: () => import('./features/misc/misc.module').then(m => m.MiscModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
