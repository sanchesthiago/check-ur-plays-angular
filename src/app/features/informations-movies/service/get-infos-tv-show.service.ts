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

@Injectable({
  providedIn: 'root',
})
export class GetInfosTvShowService {
  public http: HttpClient = inject(HttpClient);
  public infosTvShow: WritableSignal<IInformationsTvShow> = signal(teste);
  public infosTvShow$: Signal<IInformationsTvShow> = this.infosTvShow;

  getInfos(): Observable<IInformationsTvShow> {
    return this.http
      .get<IInformationsTvShow>('http://localhost:9010/tvserie/byType/94997')
      .pipe(
        tap((resp: IInformationsTvShow) => {
          this.infosTvShow.set(resp);
          console.log(resp); // Apenas para depuração
          return resp;
        })
      );
  }
}
