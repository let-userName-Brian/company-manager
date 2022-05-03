import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { LoginComponent } from './features/login/login.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { TopMetricsComponent } from './features/metrics/top-metrics/top-metrics.component';
import { BottomMetricsComponent } from './features/metrics/bottom-metrics/bottom-metrics.component';
import { CenterGraphComponent } from './features/metrics/center-graph/center-graph.component';
import { CenterSideComponent } from './features/metrics/center-side/center-side.component';
import { metricsReducer } from './features/metrics/store/metrics.state';
import { MetricsComponent } from './features/metrics/metrics.component';
import { DepartmentEffects } from './features/departments/store/dept.effects';
import { EmployeeEffects } from './features/employees/store/employees.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagerEffects } from './features/managers/store/managers.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MetricsComponent,
    UserProfileComponent,
    TopMetricsComponent,
    BottomMetricsComponent,
    CenterGraphComponent,
    CenterSideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(metricsReducer),
    EffectsModule.forRoot([DepartmentEffects, EmployeeEffects, ManagerEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }