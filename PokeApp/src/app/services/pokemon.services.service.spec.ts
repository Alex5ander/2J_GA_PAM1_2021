import { TestBed } from '@angular/core/testing';

import { Pokemon.ServicesService } from './pokemon.services.service';

describe('Pokemon.ServicesService', () => {
  let service: Pokemon.ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pokemon.ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
