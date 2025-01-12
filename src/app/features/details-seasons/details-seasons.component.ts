import { Component, inject, OnInit } from '@angular/core';
import { episodesSeason } from '../../../assets/episodes-season';
import { NgStyle } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { Season } from './interface/detailsSeason';
import { HandleTvShowsSelected } from '../../shared/service/handle-tv-shows-selected.service';
import { DetailSeasonsService } from './service/details-seasons.service';

@Component({
  selector: 'app-details-seasons',
  standalone: true,
  imports: [NgStyle, HeaderComponent],
  templateUrl: './details-seasons.component.html',
  styleUrl: './details-seasons.component.scss',
})
export class DetailsSeasonsComponent {
  public episodesSeriesService: DetailSeasonsService =
    inject(DetailSeasonsService);
}
