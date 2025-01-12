import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { informationMoviesResolver } from './informations.resolver';

describe('informationMoviesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      informationMoviesResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
