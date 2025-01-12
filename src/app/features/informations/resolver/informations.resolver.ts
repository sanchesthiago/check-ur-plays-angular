import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { IInformationsTvShow } from '../interfaces/IInformations';
import { GetInfosTvShowService } from '../service/get-infos-tv-show.service';
import { map, Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { MissingImgHandleService } from '../../../shared/service/missing-img-handle.service';

@Injectable({
  providedIn: 'root', // Torna o resolver disponível como um serviço global
})
export class InformationsResolver
  implements Resolve<Partial<IInformationsTvShow>>
{
  private informationService: GetInfosTvShowService = inject(
    GetInfosTvShowService
  );
  private missingImgService: MissingImgHandleService = inject(
    MissingImgHandleService
  );

  resolve(): Observable<Partial<IInformationsTvShow>> {
    return this.informationService.getInfos().pipe(
      map((res: IInformationsTvShow) => {
        //salva img da temporada atual para usar dentro das temporadas que nao tem img
        this.missingImgService.saveCoverForSeasons.set(res.poster_path);

        const filterResults: Partial<IInformationsTvShow> = {
          backdrop_path: `https://image.tmdb.org/t/p/w500${res.backdrop_path}`,
          seasons: res.seasons.map((path) => ({
            ...path,
            poster_path: this.missingImgService.fixCoverSeasons(
              path.poster_path
            ),
          })),
          overview: res.overview,
          original_name: res.original_name,
          name: res.name,
          poster: `https://image.tmdb.org/t/p/w500${res.poster}`,
          poster_path: `https://image.tmdb.org/t/p/w500${res.poster_path}`,
        };
        console.log('res', res);
        console.log('filterResults', filterResults);

        this.informationService.infosTvShow.set(filterResults);

        //salva img de fundo da temporada atual para usar dentro dos episodios que nao tem img
        this.missingImgService.saveCoverForEpisodes.set(
          <string>filterResults.backdrop_path
        );
        return filterResults;
      })
    );
  }
}
