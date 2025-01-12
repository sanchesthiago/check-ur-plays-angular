import { Routes } from '@angular/router';
import { homeResolver } from './features/home/resolver/home.resolver';
import { HomeComponent } from './features/home/home.component';
import { DetailsSeasonsResolver } from './features/details-seasons/resolver/details-seasons.resolver';
import { DetailsSeasonsComponent } from './features/details-seasons/details-seasons.component';
import { InformationsComponent } from './features/informations/informations.component';
import { InformationsResolver } from './features/informations/resolver/informations.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { compInfos: homeResolver },
  },
  {
    path: 'informacao',
    component: InformationsComponent,
    resolve: { compInfos: InformationsResolver }, // Atualizado
  },
  {
    path: 'destalhes-temporadas',
    component: DetailsSeasonsComponent,
    resolve: { compInfos: DetailsSeasonsResolver },
  },
];
