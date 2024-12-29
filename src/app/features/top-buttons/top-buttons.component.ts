import { Component, inject, OnInit } from '@angular/core';
import { CardMoviesComponent } from '../../shared/card-movies/card-movies.component';
import { ITrendinsLink } from '../../shared/models/ITrendins';
import { AlertsMoviesComponent } from '../../shared/alerts-movies/alerts-movies.component';
import { HomeTvShowService } from './service/home-tv-show.service';

@Component({
  selector: 'app-top-buttons',
  standalone: true,
  imports: [CardMoviesComponent, AlertsMoviesComponent],
  templateUrl: './top-buttons.component.html',
  styleUrl: './top-buttons.component.scss',
})
export class TopButtonsComponent implements OnInit {
  public infosComp: HomeTvShowService = inject(HomeTvShowService);
  public nowTrending: Array<ITrendinsLink> = [];
  ngOnInit(): void {
    this.nowTrending = [
      { link: '../../../assets/dragao.jpg' },
      { link: '../../../assets/dragao.jpg' },
      { link: '../../../assets/dragao.jpg' },
      { link: '../../../assets/dragao.jpg' },
    ];
  }
}
