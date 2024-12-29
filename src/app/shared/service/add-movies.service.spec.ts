import { TestBed } from '@angular/core/testing';

import { HandleTvShowsSelected } from './handle-tv-shows-selected.service';

describe('AddMoviesService', () => {
  let service: HandleTvShowsSelected;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleTvShowsSelected);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
