import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsCharacterProfileComponent } from './star-wars-character-profile.component';

describe('StarWarsCharacterProfileComponent', () => {
  let component: StarWarsCharacterProfileComponent;
  let fixture: ComponentFixture<StarWarsCharacterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsCharacterProfileComponent ]
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
