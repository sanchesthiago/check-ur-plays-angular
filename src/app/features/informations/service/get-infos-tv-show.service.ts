import { HttpClient } from '@angular/common/http';
import {
  inject,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IInformationsTvShow } from '../interfaces/IInformations';
import { teste } from '../../../shared/models/teste.mock';
import { HandleTvShowsSelected } from '../../../shared/service/handle-tv-shows-selected.service';
import { MissingImgHandleService } from '../../../shared/service/missing-img-handle.service';
import { IInformationsDB } from '../components/actions-movies/actions-movies.component';
import { DbService } from '../../../shared/service/db.service';

@Injectable({
  providedIn: 'root',
})
export class GetInfosTvShowService {
  private http: HttpClient = inject(HttpClient);
  public dbSvc: DbService = inject(DbService);
  private missingImgService: MissingImgHandleService = inject(
    MissingImgHandleService
  );
  private handleTvShowsSelected: HandleTvShowsSelected = inject(
    HandleTvShowsSelected
  );
  public infosTvShow: WritableSignal<Partial<IInformationsTvShow>> = signal({});
  public infosTvShow$: Signal<Partial<IInformationsTvShow>> = this.infosTvShow;

  getInfos(): Observable<IInformationsTvShow> {
    const selectedIdTvShow = this.handleTvShowsSelected.selectedTvShow$().id;
    return this.http
      .get<IInformationsTvShow>(
        `http://localhost:9010/tvserie/byType/${selectedIdTvShow}`
      )
      .pipe(
        tap((resp: IInformationsTvShow) => {
          console.log('Page Information Service', resp); // Apenas para depuração
          return resp;
        })
      );
  }

  public async saveInformationsForDb(isSelected: IInformationsDB) {
    try {
      await this.dbSvc.db.seriesDataBase.upsert({
        id: this.infosTvShow$().id?.toString(),
        serie: {
          id: '2',
          fullWatched: isSelected.fullWatched ?? false,
          isFavorit: isSelected.favorit ?? false,
        },
      });
    } catch (error) {
      alert('Deu Ruim');
      console.error(error);
      throw error;
    }
  }

  public async getInformationfromDb() {
    console.log(this.handleTvShowsSelected.selectedTvShow$().id?.toString());
    try {
      return await this.dbSvc.db.seriesDataBase
        .findOne({
          selector: {
            id: this.handleTvShowsSelected.selectedTvShow$().id?.toString(),
          },
        })
        .exec()
        .then((doc) => {
          console.dir(doc._data);
          return doc;
        });
    } catch (error) {
      alert('Deu Ruim');
      console.error(error);
      throw error;
    }
  }
}
