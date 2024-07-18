import { Component, OnInit } from '@angular/core';
import {HttpService} from 'src/app/services/http-service.service'
import { Student } from 'src/app/student';

@Component({
  selector: 'app-students-data',
  templateUrl: './students-data.component.html',
  styleUrls: ['./students-data.component.css']
})
export class StudentsDataComponent implements OnInit {
  students:Student[] = [];

  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.service.getStudents().subscribe((students) => {
      this.students = students
    })
  }

  addStudent(student:Student){
    this.service.addStudent(student).subscribe(student => this.students.push(student));
  }

  onDeleteClick(student:Student){
    this.service.deleteStudent(student).subscribe(() => {
      this.students = this.students.filter(s => s._id != student._id)
    })
  }
}
