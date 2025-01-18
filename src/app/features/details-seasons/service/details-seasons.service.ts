import {
  inject,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Episode, Season } from '../interface/detailsSeason';
import { Observable, tap } from 'rxjs';
import { HandleTvShowsSelected } from '../../../shared/service/handle-tv-shows-selected.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DetailSeasonsService {
  private handleTvShowsSelected: HandleTvShowsSelected = inject(
    HandleTvShowsSelected
  );
  private http: HttpClient = inject(HttpClient);

  public infosEpisodesSeries: WritableSignal<Array<Partial<Episode>>> = signal(
    []
  );
  public infosEpisodesSeries$: Signal<Array<Partial<Episode>>> =
    this.infosEpisodesSeries;

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
          console.log('Page Detalhes Temporada Service', resp); // Apenas para depuração
          return resp;
        })
      );
  }
}
