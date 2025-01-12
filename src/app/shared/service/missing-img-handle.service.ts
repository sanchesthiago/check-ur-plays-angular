import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MissingImgHandleService {
  //salva img da temporada atual para usar dentro das temporadas que nao tem img
  public saveCoverForSeasons: WritableSignal<string> = signal('');
  public saveCoverForSeasons$: Signal<string> = this.saveCoverForSeasons;

  //salva img de fundo da temporada atual para usar dentro dos episodios que nao tem img
  public saveCoverForEpisodes: WritableSignal<string> = signal('');
  public saveCoverForEpisodes$: Signal<string> = this.saveCoverForEpisodes;
  constructor() {}

  public fixCoverSeasons(path: string) {
    const fullPath = path
      ? `https://image.tmdb.org/t/p/w200${path}`
      : `https://image.tmdb.org/t/p/w200${this.saveCoverForSeasons$()}`;
    return fullPath;
  }
  public fixCoverEpisodes(path: string | null) {
    const fullPath = path
      ? `https://image.tmdb.org/t/p/w400${path}`
      : `https://image.tmdb.org/t/p/w400${this.saveCoverForEpisodes$()}`;
    return fullPath;
  }
}
