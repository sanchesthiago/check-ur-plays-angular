import { Component } from '@angular/core';
import { ActionsMoviesComponent } from './components/actions-movies/actions-movies.component';
import { CastMoviesComponent } from './components/cast-movies/cast-movies.component';
import { DescriptionMoviesComponent } from './components/description-movies/description-movies.component';

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
export class InformationsMoviesComponent {}
