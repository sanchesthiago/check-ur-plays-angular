import { HttpClient } from '@angular/common/http';
import {
  inject,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Observable, tap } from 'rxjs';

import { HandleTvShowsSelected } from '../../../shared/service/handle-tv-shows-selected.service';
import { MissingImgHandleService } from '../../../shared/service/missing-img-handle.service';

import { IInformationsTvShowResponse } from '../interfaces/i-informations-response';
import { IInformationsTvShowComponent } from '../interfaces/i-informations-component';

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
  public infosTvShow: WritableSignal<Partial<IInformationsTvShowComponent>> =
    signal({});
  public infosTvShow$: Signal<Partial<IInformationsTvShowComponent>> =
    this.infosTvShow;

  getInfos(): Observable<IInformationsTvShowResponse> {
    const selectedIdTvShow = this.handleTvShowsSelected.selectedTvShow$().id;
    return this.http
      .get<IInformationsTvShowResponse>(
        `http://localhost:9010/tvserie/byType/${selectedIdTvShow}`
      )
      .pipe(
        tap((resp: IInformationsTvShowResponse) => {
          console.log('Page Information Service', resp); // Apenas para depuração
          return resp;
        })
      );
  }
}
