import { Component, inject, OnInit } from '@angular/core';
import { CardMoviesComponent } from '../../shared/card-movies/card-movies.component';
import { ITrendinsLink } from '../../shared/models/ITrendins';
import { AlertsMoviesComponent } from '../../shared/alerts-movies/alerts-movies.component';
import { HomeTvShowService } from './service/home-tv-show.service';
import { Observable, tap } from 'rxjs';
import { DbService } from '../../shared/service/db.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardMoviesComponent, AlertsMoviesComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public infosComp: HomeTvShowService = inject(HomeTvShowService);
  public seriesFields$!: Observable<any[]>;
  public emittedFirst = false;
  public dbSvc: DbService = inject(DbService);

  constructor() {
    // this.seriesFields$ = this.dbSvc.db.seriesDataBase
    //   .find({
    //     selector: {},
    //     sort: [{ id: 'desc' }],
    //   })
    //   .$.pipe(
    //     tap((res) => {
    //       if (!this.emittedFirst) {
    //         this.emittedFirst = true;
    //       }
    //     })
    //   );
  }
}
