import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { departmentReducer } from './features/departments/store/dept.reducer';
import { DepartmentEffects } from './features/departments/store/dept.effects';

import { AppComponent } from './app.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { LoginComponent } from './features/login/login.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { DepartmentsComponent } from './features/departments/departments.component';
import { ManagersComponent } from './features/managers/managers.component';
import { EmployeesComponent } from './features/employees/employees.component';
import { MetricsComponent } from './features/metrics/metrics.component';
import { MiscComponent } from './features/misc/misc.component';
import { TopMetricsComponent } from './features/metrics/top-metrics/top-metrics.component';
import { BottomMetricsComponent } from './features/metrics/bottom-metrics/bottom-metrics.component';
import { CenterGraphComponent } from './features/metrics/center-graph/center-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UserProfileComponent,
    DepartmentsComponent,
    ManagersComponent,
    EmployeesComponent,
    MetricsComponent,
    MiscComponent,
    TopMetricsComponent,
    BottomMetricsComponent,
    CenterGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      department: departmentReducer
    }),
    EffectsModule.forRoot([DepartmentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
