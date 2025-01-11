import { TestBed } from '@angular/core/testing';

import { EpisodesSeriesService } from './episodes-series.service';

describe('EpisodesSeriesService', () => {
  let service: EpisodesSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodesSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
