import { inject, Injectable } from '@angular/core';
import { Episode } from '../interface/detailsSeason';
import { InterationDbService } from '../../../shared/service/interationDb.service';

@Injectable({
  providedIn: 'root',
})
export class GenerateInfosForEpisodesService {
  constructor() {}
  private infosEpisodesFromDb: InterationDbService =
    inject(InterationDbService);

  public async infosSeasons(episodes: Array<Episode>): Promise<Array<Episode>> {
    const updatedEpisodes = await Promise.all(
      episodes.map(async (season) => {
        const dbSeason =
          await this.infosEpisodesFromDb.epsodesInformationfromDb();
        if (dbSeason && dbSeason._data) {
          season.watched = dbSeason._data.seasons.season.properties.some(
            (prop: any) => prop.id === season.id.toString() && prop.watched
          );
        }
        return season;
      })
    );
    return updatedEpisodes;
  }
}
