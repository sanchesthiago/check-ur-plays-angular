import { Component, inject, OnInit } from '@angular/core';
import { CardMoviesComponent } from '../../shared/card-movies/card-movies.component';
import { ITrendinsLink } from '../../shared/models/ITrendins';
import { AlertsMoviesComponent } from '../../shared/alerts-movies/alerts-movies.component';
import { HomeTvShowService } from './service/home-tv-show.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardMoviesComponent, AlertsMoviesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public infosComp: HomeTvShowService = inject(HomeTvShowService);
}
