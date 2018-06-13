import { Post } from './../model/post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from "rxjs/observable/forkJoin";
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  findById(){
    return this.http.get<any>('https://swapi.co/api/people/1/');
  }

  getFilms( films:string[] ){
    let arrFilms:any[]= [];
    for( let i in films ){
      arrFilms.push(this.http.get( films[i] ));
    }
    return forkJoin<any[]>( arrFilms );
  }

  

}
