import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentFormComponent } from './components/add-student-form/add-student-form.component';
import { StudentsDataComponent } from './components/students-data/students-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentFormComponent,
    StudentsDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
