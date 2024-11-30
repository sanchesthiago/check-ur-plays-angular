import { TestBed } from '@angular/core/testing';

import { PercentsWatchedMoviesService } from './percents-watched-movies.service';

describe('PercentsService', () => {
  let service: PercentsWatchedMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PercentsWatchedMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
