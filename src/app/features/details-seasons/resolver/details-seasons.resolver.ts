import { Resolve, ResolveFn } from '@angular/router';
import { Observable, map, of, tap } from 'rxjs';
import { Episode, Season } from '../interface/detailsSeason';
import { DetailSeasonsService } from '../service/details-seasons.service';
import { inject, Injectable } from '@angular/core';
import { MissingImgHandleService } from '../../../shared/service/missing-img-handle.service';

@Injectable({
  providedIn: 'root', // Torna o resolver disponível como um serviço global
})
export class DetailsSeasonsResolver
  implements Resolve<Array<Partial<Episode>>>
{
  private episodesSeriesService: DetailSeasonsService =
    inject(DetailSeasonsService);
  private missingImgService: MissingImgHandleService = inject(
    MissingImgHandleService
  );
  resolve(): Observable<Array<Partial<Episode>>> {
    return this.episodesSeriesService.getDetailsSeasons().pipe(
      map((res: Season) => {
        const filterResults: Array<Partial<Episode>> = res.episodes.map(
          (episode: Episode) => {
            return {
              air_date: episode.air_date,
              episode_number: episode.episode_number,
              name: episode.name,
              overview: episode.overview,
              still_path: this.missingImgService.fixCoverEpisodes(
                episode.still_path
              ),
            };
          }
        );
        console.log('teste', filterResults);
        this.episodesSeriesService.infosEpisodesSeries.set(filterResults);
        return filterResults;
      })
    );
  }
}
