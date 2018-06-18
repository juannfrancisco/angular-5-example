import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  constructor() { }
  displayedColumns = [ "nombre", "autor" ];
  canciones:any[]= [
                    {nombre:"Locura Espacial", autor:"Chancho en Piedra", duracion:20},
                    {nombre:"El Aval", autor:"Los Tres", duracion:120},
                    {nombre:"Huke", autor:"Julius Popper", duracion:120},
                    {nombre:"Tren al sur", autor:"Los Prisioneros", duracion:120}];

  @Output()
  emisor: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }


  playCancion( cancion ){
    this.emisor.emit( cancion );
  }

}
