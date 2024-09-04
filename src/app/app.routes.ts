import { Routes } from '@angular/router';
import { TopButtonsComponent } from './features/top-buttons/top-buttons.component';
import { InformationsMoviesComponent } from './features/informations-movies/informations-movies.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TopButtonsComponent },
  { path: 'informacao', component: InformationsMoviesComponent },
];
