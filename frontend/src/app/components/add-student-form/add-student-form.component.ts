import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {
  @Output() onAddStudent: EventEmitter<Student> = new EventEmitter()

  firstname!: string;
  lastname!: string;
  email!: string;
  
  constructor() { }

  ngOnInit(): void {
  
  }

  onSubmit(){
    const newStudent = {
     firstName : this.firstname,
     lastName : this.lastname,
     email : this.email,
    }

    this.firstname = "";
    this.lastname = "";
    this.email = "";

    this.onAddStudent.emit(newStudent)
  }

}
