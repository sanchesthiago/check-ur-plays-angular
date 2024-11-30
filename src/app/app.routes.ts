import { Routes } from '@angular/router';
import { TopButtonsComponent } from './features/top-buttons/top-buttons.component';
import { InformationsMoviesComponent } from './features/informations-movies/informations-movies.component';
import { EpisodesSeriesComponent } from './features/episodes-series/episodes-series.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TopButtonsComponent },
  { path: 'informacao', component: InformationsMoviesComponent },
  { path: 'destalhes-temporadas', component: EpisodesSeriesComponent },
];
