import { TestBed } from '@angular/core/testing';

import { DetailSeasonsService } from './details-seasons.service';

describe('EpisodesSeriesService', () => {
  let service: DetailSeasonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailSeasonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
