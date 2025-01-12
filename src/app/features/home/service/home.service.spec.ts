import { TestBed } from '@angular/core/testing';

import { HomeTvShowService } from './home-tv-show.service';

describe('HomeService', () => {
  let service: HomeTvShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeTvShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
