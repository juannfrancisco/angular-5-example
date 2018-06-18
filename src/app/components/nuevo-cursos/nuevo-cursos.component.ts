import { CursosService } from './../../services/cursos.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

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

  visible = true;

  
  @Output()open = new EventEmitter<string>();
  
  /**
  @Output()
  close = new EventEmitter();
  */

  name:string;
  students:number;

  ngOnInit() {
  }

  addCourse(){
    this.coursesServices.addCourse( {name:this.name, cantAlumnos:this.students} );
  }

  toggle() {
    this.open.emit("121");
    this.visible = !this.visible;

    /**
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
     */
  }

}
