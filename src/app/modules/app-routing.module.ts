import { StarWarsCharacterProfileComponent } from './../components/starwars/star-wars-character-profile/star-wars-character-profile.component';
import { StarWarsCharactersComponent } from './../components/starwars/star-wars-characters/star-wars-characters.component';
import { MaterialesComponent } from './../components/materiales/materiales.component';
import { EjerciciosComponent } from './../components/ejercicios/ejercicios.component';
import { HomeComponent } from './../components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'ejercicios',component:EjerciciosComponent},
  {path:'starwars/personajes',component:StarWarsCharactersComponent},
  {path:'starwars/personajes/profile',component:StarWarsCharacterProfileComponent},
  {path:'materiales',component:MaterialesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
