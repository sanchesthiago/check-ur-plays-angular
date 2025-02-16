import { inject, Injectable } from '@angular/core';
import { ISeasons } from '../interfaces/IInformations';
import { InterationDbService } from '../../../shared/service/interationDb.service';
import { map } from 'rxjs';
import { DbService } from '../../../shared/service/db.service';

@Injectable({
  providedIn: 'root',
})
export class GenerateInfosForSeasonsService {
  private infosSeasonsFromDb: InterationDbService = inject(InterationDbService);
  public dbSvc: DbService = inject(DbService);

  public async infosSeasons(
    seasons: Array<ISeasons>
  ): Promise<Array<ISeasons>> {
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
