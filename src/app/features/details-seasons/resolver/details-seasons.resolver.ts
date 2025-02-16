import { Resolve, ResolveFn } from '@angular/router';
import { Observable, forkJoin, map, tap } from 'rxjs';
import { Episode, Season } from '../interface/detailsSeason';
import { DetailSeasonsService } from '../service/details-seasons.service';
import { inject, Injectable } from '@angular/core';
import { MissingImgHandleService } from '../../../shared/service/missing-img-handle.service';
import { InterationDbService } from '../../../shared/service/interationDb.service';

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
  private interactionDbService: InterationDbService =
    inject(InterationDbService);

  resolve(): Observable<Array<Partial<Episode>>> {
    return forkJoin({
      detailsSeasons: this.episodesSeriesService.getDetailsSeasons(),
      episodesInfoFromDb: this.interactionDbService.epsodesInformationfromDb(),
    }).pipe(
      map(({ detailsSeasons, episodesInfoFromDb }) => {
        const filterResults: Array<Partial<Episode>> =
          detailsSeasons.episodes.map((episode: Episode) => {
            const dbEpisode =
              episodesInfoFromDb?._data?.episodes?.episode?.properties?.find(
                (prop: any) => prop.id === episode.id.toString()
              );
            return {
              id: episode.id,
              air_date: episode.air_date,
              episode_number: episode.episode_number,
              name: episode.name,
              overview: episode.overview,
              still_path: this.missingImgService.fixCoverEpisodes(
                episode.still_path
              ),
              watched: dbEpisode ? dbEpisode.watched : false,
            };
          });
        //@ts-ignore
        this.episodesSeriesService.infosEpisodesSeries.set(filterResults);
        console.log('Page Detalhes Temporada Componente', filterResults); // Apenas para depuração
        return filterResults;
      })
    );
  }
}
