import { TestBed } from '@angular/core/testing';

import { MarvelComicsService } from './marvel-comics.service';

describe('MarvelComicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelComicsService = TestBed.get(MarvelComicsService);
    expect(service).toBeTruthy();
  });
});
