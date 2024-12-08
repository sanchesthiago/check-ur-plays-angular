import { Component, inject, OnInit } from '@angular/core';
import { ActionsMoviesComponent } from './components/actions-movies/actions-movies.component';
import { CastMoviesComponent } from '../../shared/cast-movies/cast-movies.component';
import { DescriptionMoviesComponent } from './components/description-movies/description-movies.component';
import { GetInfosTvShowService } from './service/get-infos-tv-show.service';

@Component({
  selector: 'app-informations-movies',
  standalone: true,
  imports: [
    ActionsMoviesComponent,
    CastMoviesComponent,
    DescriptionMoviesComponent,
  ],
  templateUrl: './informations-movies.component.html',
  styleUrl: './informations-movies.component.scss',
})
export class InformationsMoviesComponent {
  public infos: GetInfosTvShowService = inject(GetInfosTvShowService);
}
