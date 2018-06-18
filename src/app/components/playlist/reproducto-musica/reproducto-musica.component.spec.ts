import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductoMusicaComponent } from './reproducto-musica.component';

describe('ReproductoMusicaComponent', () => {
  let component: ReproductoMusicaComponent;
  let fixture: ComponentFixture<ReproductoMusicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproductoMusicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproductoMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
