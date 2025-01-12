import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { DetailsSeasonsResolver } from './details-seasons.resolver';

describe('episodesSeriesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      DetailsSeasonsResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
