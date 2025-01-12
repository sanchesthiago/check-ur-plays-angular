import { HttpClient } from '@angular/common/http';
import {
  inject,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IHomeTvShow, TvShow } from '../interfaces/IHomeInterface';

@Injectable({
  providedIn: 'root',
})
export class HomeTvShowService {
  public http: HttpClient = inject(HttpClient);
  public HomeTvShowPopularity: WritableSignal<Array<Partial<TvShow>>> = signal([
    {
      backdrop_path: '',
      id: 0,
      name: '',
      overview: '',
    },
  ]);
  public HomeTvShowPopularity$: Signal<Array<Partial<TvShow>>> =
    this.HomeTvShowPopularity;

  getPopularyTvShow(): Observable<IHomeTvShow> {
    return this.http
      .get<IHomeTvShow>('http://localhost:9010/tvserie/popular')
      .pipe(
        tap((resp: IHomeTvShow) => {
          console.log(resp); // Apenas para depuração
          return resp;
        })
      );
  }
}
