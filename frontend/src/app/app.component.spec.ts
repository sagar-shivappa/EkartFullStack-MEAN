import {  TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AddStudentFormComponent } from './components/add-student-form/add-student-form.component';


import * as data from '../db.json' 
import { StudentsDataComponent } from './components/students-data/students-data.component';
let db:  any  = (data  as  any).default;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AddStudentFormComponent,
        StudentsDataComponent
      ],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ]
    }).compileComponents();
  });

  it("should have Form UI elements present", () => {
    const fixture = TestBed.createComponent(AddStudentFormComponent);
    const app = fixture.componentInstance;
    const appNative = fixture.nativeElement;
  
    expect(appNative.querySelector('#firstNameInput')).toBeTruthy();
    expect(appNative.querySelector('#lastNameInput')).toBeTruthy();
    expect(appNative.querySelector('#emailInput')).toBeTruthy();
    expect(appNative.querySelector('#submitBtn')).toBeTruthy();
  })
  
  it("should show students from json server", () => {
    const fixture = TestBed.createComponent(StudentsDataComponent);
    const app = fixture.componentInstance;
    const appNative = fixture.nativeElement;
    app.students = db.students;
    
    fixture.detectChanges();
    let firstName = fixture.debugElement.queryAll(By.css('#studentFirstName'));
    expect(firstName.length).toEqual(db.students.length)
    fixture.debugElement.queryAll(By.css('#studentFirstName')).forEach((node, index) => {
      expect(db.students[index].firstName).toEqual(node.nativeNode.textContent.trim());
    })
    fixture.debugElement.queryAll(By.css('#studentLastName')).forEach((node, index) => {
      expect(db.students[index].lastName).toEqual(node.nativeNode.textContent.trim());
    })
    fixture.debugElement.queryAll(By.css('#studentEmail')).forEach((node, index) => {
      expect(db.students[index].email).toEqual(node.nativeNode.textContent.trim());
    })
  })

  it('should emit on Add Student btn Clicked', async () => {
    const fixture = TestBed.createComponent(AddStudentFormComponent);
    const app = fixture.componentInstance;
    const appNative = fixture.nativeElement;

    spyOn(app.onAddStudent, 'emit');
    appNative.querySelector('#submitBtn').click();
    expect(app.onAddStudent.emit).toHaveBeenCalled();
 });

 it('should emit on Delete Student btn Clicked', async () => {
  const fixture = TestBed.createComponent(StudentsDataComponent);
  const app = fixture.componentInstance;
  const appNative = fixture.nativeElement;
  app.students = db.students;

  fixture.detectChanges();
  spyOn(app,'onDeleteClick' );
  appNative.querySelector('#deleteBtn-1').click();
  expect(app.onDeleteClick).toHaveBeenCalledWith(db.students[0]);
});

});


