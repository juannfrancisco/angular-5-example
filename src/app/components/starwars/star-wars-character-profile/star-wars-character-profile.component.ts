import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../../../services/star-wars.service';

@Component({
  selector: 'app-star-wars-character-profile',
  templateUrl: './star-wars-character-profile.component.html',
  styleUrls: ['./star-wars-character-profile.component.css'],
  providers:[ StarWarsService ]
})
export class StarWarsCharacterProfileComponent implements OnInit {

  loading:boolean = true;
  character:any;
  films:any[];

  constructor(private route: ActivatedRoute, private starWarsService:StarWarsService) { 

  }

  ngOnInit() {
    const url = this.route.snapshot.params['url'];
    this.starWarsService.findCharacter(url).subscribe( response =>{
      this.character = {...response};
      

      this.starWarsService.findFilms(this.character.films).subscribe( responseFilms =>{
        this.films = responseFilms.slice();
        this.loading = false;
      });
    } );
  }

}
