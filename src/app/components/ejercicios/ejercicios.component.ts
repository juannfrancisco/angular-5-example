import { ReactiveService } from './../../services/reactive.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
  providers: [ReactiveService]
})
export class EjerciciosComponent implements OnInit {





  numero:number = 2;
  rut = '677877601';
  name = 'Juan';
  lastName = 'Maldonado leon';
  avanceCurso = 8000000;
  valorCurso = 1000;
  year = 2018;

  cursos = ['angular', 'java', 'react', 'node'];

  birthday = new Date(1989, 0, 12);

  constructor( ) {    
  }

  ngOnInit() {
    
  }

  test(event){
    console.log( event );
  }

}