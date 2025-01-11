import { inject, Injectable } from '@angular/core';
import { Season } from '../interface/detailsSeason';
import { Observable, tap } from 'rxjs';
import { HandleTvShowsSelected } from '../../../shared/service/handle-tv-shows-selected.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EpisodesSeriesService {
  private handleTvShowsSelected: HandleTvShowsSelected = inject(
    HandleTvShowsSelected
  );
  private http: HttpClient = inject(HttpClient);

  getDetailsSeasons(): Observable<Season> {
    const season_number =
      this.handleTvShowsSelected.selectedSeason$().season_number;
    const id = this.handleTvShowsSelected.selectedTvShow$().id;

    const headers = new HttpHeaders({
      'season-number': <number>season_number,
      'series-id': <number>id,
    });

    return this.http
      .get<Season>(`http://localhost:9010/tvserie/details-season`, { headers })
      .pipe(
        tap((resp: Season) => {
          console.log(resp); // Apenas para depuração
          return resp;
        })
      );
  }
}
