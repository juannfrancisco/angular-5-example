import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproducto-musica',
  templateUrl: './reproducto-musica.component.html',
  styleUrls: ['./reproducto-musica.component.css']
})
export class ReproductoMusicaComponent {

  cancion:any = null;
  time:number = 0;
  interval:any;

  reproductor:Observable<any>;

  testEvent(event){
    this.cancion = event;
    this.time = 0;

    if( this.interval ){
      clearInterval( this.interval );
    }

    this.interval = setInterval(()=> {
      if( this.time > this.cancion.duracion ){
        this.cancion = null;
        this.time = 0;
        clearInterval( this.interval );
      }else{
        this.time++;
      }
    }, 1000 );
  }
}
