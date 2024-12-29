import { inject, Injectable } from '@angular/core';
import { IHomeTvShow, TvShow } from '../interfaces/IHomeInterface';
import { Resolve } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { HomeTvShowService } from '../service/home-tv-show.service';
@Injectable({
  providedIn: 'root', // Torna o resolver disponível como um serviço global
})
export class homeResolver implements Resolve<Array<Partial<TvShow>>> {
  private homeTvShowService: HomeTvShowService = inject(HomeTvShowService);
  resolve(): Observable<Array<Partial<TvShow>>> {
    return this.homeTvShowService.getPopularyTvShow().pipe(
      map((res: IHomeTvShow) => {
        const filterResults: Array<Partial<TvShow>> = res.results.map(
          (value) => {
            return {
              backdrop_path: value.backdrop_path
                ? `https://image.tmdb.org/t/p/w400${value.backdrop_path}`
                : null,
              id: value.id,
              name: value.name,
              overview: value.overview,
              first_air_date: value.first_air_date,
            };
          }
        );
        this.homeTvShowService.HomeTvShowPopularity.set(filterResults);
        return filterResults;
      })
    );
  }
}
