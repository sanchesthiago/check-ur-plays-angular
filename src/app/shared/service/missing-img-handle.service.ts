import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MissingImgHandleService {
  public saveCoverForSeasons: WritableSignal<string> = signal('');
  public saveCoverForSeasons$: Signal<string> = this.saveCoverForSeasons;
  constructor() {}

  public fixCoverSeasons(path: string) {
    return path ? path : 'dsa';
  }
  public fixCoverEpisodes(path: string | null) {
    const fullPath = path
      ? `https://image.tmdb.org/t/p/w400${path}`
      : `https://image.tmdb.org/t/p/w400${this.saveCoverForSeasons$()}`;
    return fullPath;
  }
}
