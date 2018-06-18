import { TestBed, inject } from '@angular/core/testing';

import { ReactiveService } from './reactive.service';

describe('ReactiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactiveService]
    });
  });

  it('should be created', inject([ReactiveService], (service: ReactiveService) => {
    expect(service).toBeTruthy();
  }));
});
