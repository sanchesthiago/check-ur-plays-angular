import { Component, inject, OnInit } from '@angular/core';
import { IEpisodesSeasons } from '../../shared/models/IEpisodesSeason';
import { episodesSeason } from '../../../assets/episodes-season';
import { NgStyle } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-episodes-series',
  standalone: true,
  imports: [NgStyle, HeaderComponent],
  templateUrl: './episodes-series.component.html',
  styleUrl: './episodes-series.component.scss',
})
export class EpisodesSeriesComponent {
  public episodesSeason: Array<IEpisodesSeasons> = episodesSeason;
}
