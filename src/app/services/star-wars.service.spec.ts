import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { StarWarsService } from './star-wars.service';

describe('StarWarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ],
      providers: [StarWarsService]
    });
  });

  it('should be created', inject([StarWarsService], (service: StarWarsService) => {
    expect(service).toBeTruthy();
  }));
});
