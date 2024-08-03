import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AuthInterceptor } from "./Interceptor/auth.interceptor";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentFormComponent } from './components/add-student-form/add-student-form.component';
import { HeaderComponent } from './components/header/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UserCartComponent } from './components/home/user-cart/user-cart.component';
import { LoginComponent } from './components/login/login.component';
import { StudentsDataComponent } from './components/students-data/students-data.component';
import { ToastNotificationComponent } from './components/util/toast-notification/toast-notification.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentFormComponent,
    StudentsDataComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    UserCartComponent,
    ToastNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
