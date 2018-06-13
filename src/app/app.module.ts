import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { CursosService } from './services/cursos.service';
import { NuevoCursosComponent } from './components/nuevo-cursos/nuevo-cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './components/starwars/characters/characters.component';
import { StarWarsCharactersComponent } from './components/starwars/star-wars-characters/star-wars-characters.component';
import { StarWarsCharacterProfileComponent } from './components/starwars/star-wars-character-profile/star-wars-character-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EjerciciosComponent,
    MaterialesComponent,
    NuevoCursosComponent,
    CharactersComponent,
    StarWarsCharactersComponent,
    StarWarsCharacterProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
