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

@Injectable({
  providedIn: 'root',
})
export class GetInfosTvShowService {
  private http: HttpClient = inject(HttpClient);
  private handleTvShowsSelected: HandleTvShowsSelected = inject(
    HandleTvShowsSelected
  );
  public infosTvShow: WritableSignal<IInformationsTvShow> = signal(teste);
  public infosTvShow$: Signal<IInformationsTvShow> = this.infosTvShow;

  getInfos(): Observable<IInformationsTvShow> {
    const selectedIdTvShow = this.handleTvShowsSelected.selectedTvShow$().id;
    console.log('ID', teste);
    return this.http
      .get<IInformationsTvShow>(
        `http://localhost:9010/tvserie/byType/${selectedIdTvShow}`
      )
      .pipe(
        tap((resp: IInformationsTvShow) => {
          this.infosTvShow.set(resp);
          console.log(resp); // Apenas para depuração
          return resp;
        })
      );
  }
}
