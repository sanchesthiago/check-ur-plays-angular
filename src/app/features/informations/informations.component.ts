import { Component, inject, OnInit } from '@angular/core';
import { ActionsMoviesComponent } from './components/actions-movies/actions-movies.component';
import { CastMoviesComponent } from '../../shared/cast-movies/cast-movies.component';
import { DescriptionMoviesComponent } from './components/description-movies/description-movies.component';
import { GetInfosTvShowService } from './service/get-infos-tv-show.service';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { DbService } from '../../shared/service/db.service';
import { HandleTvShowsSelected } from '../../shared/service/handle-tv-shows-selected.service';

@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [
    ActionsMoviesComponent,
    CastMoviesComponent,
    DescriptionMoviesComponent,
    CommonModule,
  ],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss',
})
export class InformationsComponent {}
