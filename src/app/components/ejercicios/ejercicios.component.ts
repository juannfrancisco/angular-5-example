import { Post } from './../../model/post';
import { PostService } from './../../services/post.service';
import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
  providers: [
    PostService
  ]
})
export class EjerciciosComponent implements OnInit {

  personaje:any;
  peliculas:any[];
  peliculas2:any[];


  constructor( private services:PostService ) {    
    
    this.services.findById().subscribe( resp =>{
      this.personaje = {...resp};
      this.services.getFilms( resp.films ).subscribe( respFilms =>{
        this.peliculas = respFilms.slice();
      } );
    });

    
  }

  ngOnInit() {
  }

  agregarEl(){
    this.peliculas.push( {title:'asd'} );
  }

}