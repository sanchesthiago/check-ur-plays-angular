import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { episodesSeriesResolver } from './episodes-series.resolver';

describe('episodesSeriesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => episodesSeriesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
