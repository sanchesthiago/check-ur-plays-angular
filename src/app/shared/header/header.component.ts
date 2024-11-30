import { Component, inject } from '@angular/core';
import { PercentsWatchedMoviesService } from '../service/percents-watched-movies.service';
import { IEpisodesSeasons } from '../models/IEpisodesSeason';
import { episodesSeason } from '../../../assets/episodes-season';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public percentsWatched: PercentsWatchedMoviesService = inject(
    PercentsWatchedMoviesService
  );
  public episodesSeason: Array<IEpisodesSeasons> = episodesSeason;
}
