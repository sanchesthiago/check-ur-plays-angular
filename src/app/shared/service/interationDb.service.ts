import { inject, Injectable, Signal } from '@angular/core';
import { DbService } from './db.service';
import { HandleTvShowsSelected } from './handle-tv-shows-selected.service';
import { IInformationsDB } from '../../features/informations/components/actions-movies/actions-movies.component';
import { IDbSerieComponent } from '../interfaces/IDbSerieComponent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterationDbService {
  public dbSvc: DbService = inject(DbService);
  private handleTvShowsSelected: HandleTvShowsSelected = inject(
    HandleTvShowsSelected
  );

  public async saveInformationsForDb(isSelected: IInformationsDB) {
    try {
      await this.dbSvc.db.seriesDataBase.upsert({
        id: this.handleTvShowsSelected.selectedTvShow$().id?.toString(),
        series: {
          id: this.handleTvShowsSelected.selectedTvShow$().id?.toString(),
          fullWatched: isSelected.fullWatched,
          isFavorit: isSelected.favorit,
        },
      });
    } catch (error) {
      alert('Deu Ruim');
      console.error(error);
      throw error;
    }
  }

  public serieInformationfromDb(): Signal<IDbSerieComponent> {
    return this.dbSvc.db.seriesDataBase.findOne({
      selector: {
        id: this.handleTvShowsSelected.selectedTvShow$().id?.toString(),
      },
    }).$$ as Signal<any>;
  }

  public async seasonInformationfromDb(): Promise<any> {
    return await this.dbSvc.db.seasonDataBase
      .findOne({
        selector: {
          id: this.handleTvShowsSelected.selectedTvShow$().id?.toString(),
        },
      })
      .exec()
      .then((res: any) => {
        return res;
      });
  }

  public async epsodesInformationfromDb(): Promise<any> {
    return await this.dbSvc.db.episodeDataBase
      .findOne({
        selector: {
          id: this.handleTvShowsSelected.selectedTvShow$().id?.toString(),
        },
      })
      .exec()
      .then((res: any) => {
        return res;
      });
  }

  public async getInformationfromDb2(): Promise<any> {
    return await this.dbSvc.db.seriesDataBase
      .findOne({
        selector: {
          id: this.handleTvShowsSelected.selectedTvShow$().id?.toString(),
        },
      })
      .exec()
      .then((res) => {
        return res;
      });
  }

  public async save(id: string, watched: boolean) {
    try {
      const selectedIdTvShow = this.handleTvShowsSelected
        .selectedTvShow$()
        .id?.toString();
      const existingDoc = await this.dbSvc.db.seasonDataBase
        .findOne({
          selector: {
            id: selectedIdTvShow,
          },
        })
        .exec();

      if (existingDoc) {
        const seasons = existingDoc._data.seasons || {
          season: { properties: [] },
        };
        const properties = seasons.season.properties;
        const propertyIndex = properties.findIndex(
          (prop: any) => prop.id === id
        );

        if (propertyIndex !== -1) {
          // Atualiza a propriedade watched se o id já existir
          properties[propertyIndex].watched = watched;
        } else {
          // Adiciona um novo objeto ao array properties se o id não existir
          properties.push({ id: id, watched: watched });
        }

        // Atualiza o documento no banco de dados
        await this.dbSvc.db.seasonDataBase.upsert({
          id: selectedIdTvShow,
          seasons: {
            season: {
              properties: properties,
            },
          },
        });
      } else {
        // Cria um novo documento se não existir
        await this.dbSvc.db.seasonDataBase.upsert({
          id: selectedIdTvShow,
          seasons: {
            season: {
              properties: [
                {
                  id: id,
                  watched: watched,
                },
              ],
            },
          },
        });
      }
    } catch (error) {
      alert('Deu Ruim');
      console.error(error);
      throw error;
    }
  }

  // Novo método para salvar informações do componente episodes
  public async saveEpisode(id: string, watched: boolean) {
    try {
      const selectedIdTvShow = this.handleTvShowsSelected
        .selectedTvShow$()
        .id?.toString();
      const existingDoc = await this.dbSvc.db.episodeDataBase
        .findOne({
          selector: {
            id: selectedIdTvShow,
          },
        })
        .exec();

      if (existingDoc) {
        const episodes = existingDoc._data.episodes || {
          episode: { properties: [] },
        };
        const properties = episodes.episode.properties;
        const propertyIndex = properties.findIndex(
          (prop: any) => prop.id === id
        );

        if (propertyIndex !== -1) {
          // Atualiza a propriedade watched se o id já existir
          properties[propertyIndex].watched = watched;
        } else {
          // Adiciona um novo objeto ao array properties se o id não existir
          properties.push({ id: id, watched: watched });
        }

        // Atualiza o documento no banco de dados
        await this.dbSvc.db.episodeDataBase.upsert({
          id: selectedIdTvShow,
          episodes: {
            episode: {
              properties: properties,
            },
          },
        });
      } else {
        // Cria um novo documento se não existir
        await this.dbSvc.db.episodeDataBase.upsert({
          id: selectedIdTvShow,
          episodes: {
            episode: {
              properties: [
                {
                  id: id,
                  watched: watched,
                },
              ],
            },
          },
        });
      }
    } catch (error) {
      alert('Deu Ruim');
      console.error(error);
      throw error;
    }
  }
}
