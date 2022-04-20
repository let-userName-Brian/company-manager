import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { TestComponent } from './features/testing/test.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './features/login/login.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NavbarComponent } from './features/navbar/navbar.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { counterReducer } from './core/store/counter/counter.reducer';
import { DepartmentsComponent } from './features/departments/departments.component';
import { departmentReducer } from './features/departments/store/dept.reducer';
import { DepartmentEffects } from './features/departments/store/dept.effects';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    NavbarComponent,
    UserProfileComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      department: departmentReducer
    }),
    EffectsModule.forRoot([DepartmentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
