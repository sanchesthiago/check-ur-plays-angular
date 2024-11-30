import { Injectable } from '@angular/core';
import { IEpisodesSeasons } from '../models/IEpisodesSeason';
import { IProgress } from '../models/IProgress';

@Injectable({
  providedIn: 'root',
})
export class PercentsWatchedMoviesService {
  constructor() {}

  getWatchedPercentage(episodesSeason: Array<IEpisodesSeasons>): IProgress {
    const totalEpisodes = episodesSeason.length;
    const watchedEpisodes = episodesSeason.filter(
      (episode) => episode.watched
    ).length;
    return {
      totalEpisodes: totalEpisodes,
      watchedEpisodes: watchedEpisodes,
      // Evita divisão por zero e retorna a porcentagem formatada
      percent: totalEpisodes > 0 ? (watchedEpisodes / totalEpisodes) * 100 : 0,
    };
  }
}
