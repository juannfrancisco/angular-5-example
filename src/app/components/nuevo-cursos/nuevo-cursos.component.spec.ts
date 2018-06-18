import { HttpClientModule } from '@angular/common/http';
import { CursosService } from './../../services/cursos.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from './../../modules/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCursosComponent } from './nuevo-cursos.component';
import { FormsModule } from '@angular/forms';

describe('NuevoCursosComponent', () => {
  let component: NuevoCursosComponent;
  let fixture: ComponentFixture<NuevoCursosComponent>;

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
      declarations: [ NuevoCursosComponent ],
      providers:[
        CursosService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
