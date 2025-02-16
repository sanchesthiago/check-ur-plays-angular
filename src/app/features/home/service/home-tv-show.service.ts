import { HttpClient } from '@angular/common/http';
import {
  inject,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IHomeTvShowResponse } from '../interfaces/i-home-response';
import { TvShowComponent } from '../interfaces/i-tv-show-component';

@Injectable({
  providedIn: 'root',
})
export class HomeTvShowService {
  public http: HttpClient = inject(HttpClient);

  public HomeTvShowPopularity: WritableSignal<Array<Partial<TvShowComponent>>> =
    signal([{}]);
  public HomeTvShowPopularity$: Signal<Array<Partial<TvShowComponent>>> =
    this.HomeTvShowPopularity;

  getPopularyTvShow(): Observable<IHomeTvShowResponse> {
    return this.http
      .get<IHomeTvShowResponse>('http://localhost:9010/tvserie/popular')
      .pipe(
        tap((resp: IHomeTvShowResponse) => {
          console.log('Page Home Service', resp); // Apenas para depuração
          return resp;
        })
      );
  }
}
