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

@Injectable({
  providedIn: 'root',
})
export class GetInfosTvShowService {
  private http: HttpClient = inject(HttpClient);
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
          console.log(resp); // Apenas para depuração
          return resp;
        })
      );
  }
}
