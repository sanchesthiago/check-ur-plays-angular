import { Resolve, ResolveFn } from '@angular/router';
import { Observable, map, of, tap } from 'rxjs';
import { Episode, Season } from '../interface/detailsSeason';
import { EpisodesSeriesService } from '../service/episodes-series.service';
import { inject, Injectable } from '@angular/core';
import { MissingImgHandleService } from '../../../shared/service/missing-img-handle.service';

@Injectable({
  providedIn: 'root', // Torna o resolver disponível como um serviço global
})
export class episodesSeriesResolver
  implements Resolve<Array<Partial<Episode>>>
{
  private episodesSeriesService: EpisodesSeriesService = inject(
    EpisodesSeriesService
  );
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
