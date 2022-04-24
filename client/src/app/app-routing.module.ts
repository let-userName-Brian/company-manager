import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './features/departments/departments.component';
import { EmployeesComponent } from './features/employees/employees.component';
import { ManagersComponent } from './features/managers/managers.component';
import { MetricsComponent } from './features/metrics/metrics.component';
import { MiscComponent } from './features/misc/misc.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'metrics', component: MetricsComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'managers', component: ManagersComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'misc', component: MiscComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
