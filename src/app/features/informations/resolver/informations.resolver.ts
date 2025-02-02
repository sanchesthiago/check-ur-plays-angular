import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { IInformationsTvShow } from '../interfaces/IInformations';
import { GetInfosTvShowService } from '../service/get-infos-tv-show.service';
import { forkJoin, map, Observable, switchMap, tap } from 'rxjs';
import { inject, Injectable, Signal } from '@angular/core';
import { MissingImgHandleService } from '../../../shared/service/missing-img-handle.service';
import { IDbSerieComponent } from '../../../shared/interfaces/IDbSerieComponent';
import { InterationDbService } from '../../../shared/service/interationDb.service';
import { GenerateInfosForSeasonsService } from '../service/generateInfosForSeasons.service';

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
  private generateInfosForSeasonsService: GenerateInfosForSeasonsService =
    inject(GenerateInfosForSeasonsService);

  private interactionDbService: InterationDbService =
    inject(InterationDbService);

  resolve(): Observable<Partial<IInformationsTvShow>> {
    return this.informationService.getInfos().pipe(
      switchMap(async (res: IInformationsTvShow) => {
        // Salva img da temporada atual para usar dentro das temporadas que não têm img
        this.missingImgService.saveCovers.set({
          seasons: res.poster_path,
          episodes: '',
        });

        const updatedSeasons =
          await this.generateInfosForSeasonsService.infosSeasons(res.seasons);

        const filterResults: Partial<IInformationsTvShow> = {
          id: res.id,
          backdrop_path: `https://image.tmdb.org/t/p/w500${res.backdrop_path}`,
          seasons: updatedSeasons,
          overview: res.overview,
          original_name: res.original_name,
          name: res.name,
          poster: `https://image.tmdb.org/t/p/w500${res.poster}`,
          poster_path: `https://image.tmdb.org/t/p/w500${res.poster_path}`,
          serieInformationFromDb: <Signal<IDbSerieComponent>>(
            this.interactionDbService.serieInformationfromDb()
          ),
        };
        this.informationService.infosTvShow.set(filterResults);
        console.log('Page Information Componente', filterResults); // Apenas para depuração

        // Salva img de fundo da temporada atual para usar dentro dos episódios que não têm img
        this.missingImgService.saveCovers.set({
          seasons: '',
          episodes: <string>filterResults.backdrop_path,
        });
        return filterResults;
      })
    );
  }
}
