import { TestBed } from '@angular/core/testing';

import { MyComicsService } from './my-comics.service';

describe('MyComicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyComicsService = TestBed.get(MyComicsService);
    expect(service).toBeTruthy();
  });
});
