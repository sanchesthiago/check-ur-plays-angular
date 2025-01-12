import { TestBed } from '@angular/core/testing';

import { GetInfosTvShowService } from './get-infos-tv-show.service';

describe('GetInfosTvShowService', () => {
  let service: GetInfosTvShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInfosTvShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
