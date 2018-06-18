import { StarWarsService } from './../../../services/star-wars.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './../../../modules/app-material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsCharacterProfileComponent } from './star-wars-character-profile.component';

describe('StarWarsCharacterProfileComponent', () => {
  let component: StarWarsCharacterProfileComponent;
  let fixture: ComponentFixture<StarWarsCharacterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppMaterialModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ StarWarsCharacterProfileComponent ],
      providers:[
        StarWarsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsCharacterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
