import { ResolveFn } from '@angular/router';

export const episodesSeriesResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
