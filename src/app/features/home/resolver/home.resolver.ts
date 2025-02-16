import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { HomeTvShowService } from '../service/home-tv-show.service';
import { IHomeTvShowResponse } from '../interfaces/i-home-response';
import { TvShowComponent } from '../interfaces/i-tv-show-component';
@Injectable({
  providedIn: 'root', // Torna o resolver disponível como um serviço global
})
export class homeResolver implements Resolve<Array<TvShowComponent>> {
  private homeTvShowService: HomeTvShowService = inject(HomeTvShowService);
  resolve(): Observable<Array<TvShowComponent>> {
    return this.homeTvShowService.getPopularyTvShow().pipe(
      map((res: IHomeTvShowResponse) => {
        const filterResults: Array<TvShowComponent> = res.results.map(
          (value: any) => {
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
        console.log('Page Home Component', filterResults); // Apenas para depuração

        return filterResults;
      })
    );
  }
}
