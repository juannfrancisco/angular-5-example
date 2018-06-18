import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { CursosService } from './cursos.service';

describe('CursosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ],
      providers: [CursosService]
    });
  });

  it('should be created', inject([CursosService], (service: CursosService) => {
    expect(service).toBeTruthy();
  }));
});
