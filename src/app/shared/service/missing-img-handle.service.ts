import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { IMissingCover } from '../interfaces/missing-cover';

@Injectable({
  providedIn: 'root',
})
export class MissingImgHandleService {
  public saveCovers: WritableSignal<IMissingCover> = signal({
    seasons: '', //salva img da temporada atual para usar dentro das temporadas que nao tem img
    episodes: '', //salva img de fundo da temporada atual para usar dentro dos episodios que nao tem img
  });
  public saveCovers$: Signal<IMissingCover> = this.saveCovers;

  public fixCoverSeasons(path: string) {
    const fullPath = path
      ? `https://image.tmdb.org/t/p/w200${path}`
      : `https://image.tmdb.org/t/p/w200${this.saveCovers$().seasons}`;
    return fullPath;
  }
  public fixCoverEpisodes(path: string | null) {
    const fullPath = path
      ? `https://image.tmdb.org/t/p/w400${path}`
      : `https://image.tmdb.org/t/p/w400${this.saveCovers$().episodes}`;
    return fullPath;
  }
}
