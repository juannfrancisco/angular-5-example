import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-cursos',
  templateUrl: './nuevo-cursos.component.html',
  styleUrls: ['./nuevo-cursos.component.css'],
  providers: [
    CursosService
  ]
})
export class NuevoCursosComponent implements OnInit {

  constructor(  private coursesServices:CursosService ) { }

  name:string;
  students:number;

  ngOnInit() {
  }

  addCourse(){
    this.coursesServices.addCourse( {name:this.name, cantAlumnos:this.students} );
  }

}
