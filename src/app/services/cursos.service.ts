import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CursosService {

  constructor(private http: HttpClient) { }

  courses:any[] = [{name:"angular", cantAlumnos:30},
                  {name:"java", cantAlumnos:12},
                  {name:"reactjs", cantAlumnos:45},
                  {name:"vue.js", cantAlumnos:30},
                  {name:"angular", cantAlumnos:20}];
  

  find(name:string){
    return this.courses.filter( curso => {return curso.name === name} );
  }

  getAllCourses(){
    return this.courses;
  }

  addCourse(course:any){
    this.courses.push( course );
    console.log( this.courses );
  }
}
