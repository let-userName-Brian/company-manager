import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { counterReducer } from './core/state/counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    NavbarComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
