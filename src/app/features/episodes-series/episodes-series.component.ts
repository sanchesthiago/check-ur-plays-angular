import { Component, inject, OnInit } from '@angular/core';
import { episodesSeason } from '../../../assets/episodes-season';
import { NgStyle } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { Season } from './interface/detailsSeason';
import { HandleTvShowsSelected } from '../../shared/service/handle-tv-shows-selected.service';
import { EpisodesSeriesService } from './service/episodes-series.service';

@Component({
  selector: 'app-episodes-series',
  standalone: true,
  imports: [NgStyle, HeaderComponent],
  templateUrl: './episodes-series.component.html',
  styleUrl: './episodes-series.component.scss',
})
export class EpisodesSeriesComponent implements OnInit {
  public episodesSeason!: Season;
  private episodesSeriesService: EpisodesSeriesService = inject(
    EpisodesSeriesService
  );

  ngOnInit(): void {
    this.episodesSeriesService.getDetailsSeasons().subscribe((res) => {
      this.episodesSeason = res;
      console.log('EpisodesSeriesComponent', res);
    });
  }
}
