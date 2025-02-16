import { inject, Injectable } from '@angular/core';
import { InterationDbService } from '../../../shared/service/interationDb.service';
import { ISeasonsComponent } from '../interfaces/i-season-component';
import { ISeasonsResponse } from '../interfaces/i-informations-response';

@Injectable({
  providedIn: 'root',
})
export class GenerateInfosForSeasonsService {
  private infosSeasonsFromDb: InterationDbService = inject(InterationDbService);

  public async infosSeasons(
    seasons: Array<ISeasonsComponent>
  ): Promise<Array<ISeasonsComponent>> {
    const updatedSeasons = await Promise.all(
      seasons.map(async (season) => {
        const dbSeason =
          await this.infosSeasonsFromDb.seasonInformationfromDb();
        if (dbSeason && dbSeason._data) {
          season.watched = dbSeason._data.seasons.season.properties.some(
            (prop: any) => prop.id === season.id.toString() && prop.watched
          );
        }
        return season;
      })
    );
    return updatedSeasons;
  }
}
