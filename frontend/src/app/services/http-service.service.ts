import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../student';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
 //Paste URL of Live Prview of Port:8001 below
 apiUrl: string = environment.apiUrl
  
  constructor(private http: HttpClient) { }
  
  getStudents():Observable<Student[]>{
    let url = `${this.apiUrl}students`;
    return this.http.get<Student[]>(url)
  }

  addStudent(student:Student):Observable<Student>{
    let url = `${this.apiUrl}student`;
    return this.http.post<Student>(url, student)
  }

  deleteStudent(student:Student):Observable<Student>{
    let url = `${this.apiUrl}student`;
    return this.http.delete<Student>(`${url}/${student._id}`)
  }
}
