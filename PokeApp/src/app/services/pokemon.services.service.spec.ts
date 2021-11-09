import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.services.service';

describe('Pokemon.ServicesService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
