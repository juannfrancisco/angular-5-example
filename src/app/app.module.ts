import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { CursosService } from './services/cursos.service';
import { NuevoCursosComponent } from './components/nuevo-cursos/nuevo-cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { StarWarsCharactersComponent } from './components/starwars/star-wars-characters/star-wars-characters.component';
import { StarWarsCharacterProfileComponent } from './components/starwars/star-wars-character-profile/star-wars-character-profile.component';
import { RutPipe } from './pipes/rut.pipe';
import { NumeroElevadoPipe } from './pipes/numero-elevado.pipe';
import { ReproductoMusicaComponent } from './components/playlist/reproducto-musica/reproducto-musica.component';
import { PlayListComponent } from './components/playlist/play-list/play-list.component';
import { TimePipe } from './pipes/time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EjerciciosComponent,
    MaterialesComponent,
    NuevoCursosComponent,
    StarWarsCharactersComponent,
    StarWarsCharacterProfileComponent,
    RutPipe,
    NumeroElevadoPipe,
    ReproductoMusicaComponent,
    PlayListComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
