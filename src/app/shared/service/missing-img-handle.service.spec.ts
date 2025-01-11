import { TestBed } from '@angular/core/testing';

import { MissingImgHandleService } from './missing-img-handle.service';

describe('MissingImgHandleService', () => {
  let service: MissingImgHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissingImgHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
