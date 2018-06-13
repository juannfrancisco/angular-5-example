import { StarWarsService } from './../../../services/star-wars.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-star-wars-characters',
  templateUrl: './star-wars-characters.component.html',
  styleUrls: ['./star-wars-characters.component.css'],
  providers: [StarWarsService]
})
export class StarWarsCharactersComponent implements OnInit {

  loading:boolean=true;
  characters:any[];
  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  constructor( private starWarsService: StarWarsService, private route:Router  ) { }

  ngOnInit() {
    this.starWarsService.findCharacters().subscribe( data =>{
      this.characters = data.results.slice();
      this.loading = false;
    });
  }


  clickRow(character){
    this.route.navigate( ['starwars','personajes','profile', {url: character.url}] );
  }

}
