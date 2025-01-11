import { Routes } from '@angular/router';
import { TopButtonsComponent } from './features/top-buttons/top-buttons.component';
import { InformationsMoviesComponent } from './features/informations-movies/informations-movies.component';
import { EpisodesSeriesComponent } from './features/episodes-series/episodes-series.component';
import { InformationMoviesResolver } from './features/informations-movies/resolver/information-movies.resolver'; // Atualizado
import { homeResolver } from './features/top-buttons/resolver/home.resolver';
import { episodesSeriesResolver } from './features/episodes-series/resolver/episodes-series.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: TopButtonsComponent,
    resolve: { compInfos: homeResolver },
  },
  {
    path: 'informacao',
    component: InformationsMoviesComponent,
    resolve: { compInfos: InformationMoviesResolver }, // Atualizado
  },
  {
    path: 'destalhes-temporadas',
    component: EpisodesSeriesComponent,
    resolve: { compInfos: episodesSeriesResolver },
  },
];
