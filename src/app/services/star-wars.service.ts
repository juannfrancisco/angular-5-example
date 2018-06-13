import { forkJoin } from 'rxjs/observable/forkJoin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {

  constructor(private http: HttpClient) { }


  findCharacters(){
    return this.http.get<any>("https://swapi.co/api/people/");
  }

  findCharacter( url ){
    return this.http.get( url );
  }

  findFilms( films:string[] ){
    let arrFilms:any[] = [];
    films.forEach( film => {
      arrFilms.push(this.http.get( film ));      
    });
    return forkJoin(arrFilms);
  }

}
