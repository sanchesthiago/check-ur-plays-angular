import { Component, HostListener, inject } from '@angular/core';
import { PercentsWatchedMoviesService } from '../service/percents-watched-movies.service';
import { IEpisodesSeasons } from '../models/IEpisodesSeason';
import { episodesSeason } from '../../../assets/episodes-season';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public percentsWatched: PercentsWatchedMoviesService = inject(
    PercentsWatchedMoviesService
  );
  // public episodesSeason: Array<IEpisodesSeasons> = episodesSeason;
  isFixed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = window.scrollY > 0; // Fixa o header se scrollY > 0
  }
}
