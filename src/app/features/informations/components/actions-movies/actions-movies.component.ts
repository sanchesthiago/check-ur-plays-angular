import { Component, inject } from '@angular/core';
import { GetInfosTvShowService } from '../../service/get-infos-tv-show.service';
import { DbService } from '../../../../shared/service/db.service';
import { Observable, tap } from 'rxjs';
import { HandleTvShowsSelected } from '../../../../shared/service/handle-tv-shows-selected.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actions-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actions-movies.component.html',
  styleUrls: ['./actions-movies.component.scss'],
})
export class ActionsMoviesComponent {
  public isFavorit: boolean = true;
  public infosFromDb$: Observable<any> | undefined;
  public isSelected: IInformationsDB = {
    fullWatched: false,
    favorit: false,
  };

  private handleTvShowsSelected: HandleTvShowsSelected = inject(
    HandleTvShowsSelected
  );
  private dbSvc: DbService = inject(DbService);
  public infos: GetInfosTvShowService = inject(GetInfosTvShowService);

  constructor() {
    this.initialize();
  }

  async initialize() {
    try {
      const selectedTvShowId = this.handleTvShowsSelected
        .selectedTvShow$()
        .id?.toString();
      if (selectedTvShowId) {
        this.infosFromDb$ = this.dbSvc.db.seriesDataBase
          .findOne({
            selector: { id: selectedTvShowId },
          })
          .$.pipe(
            tap((res: any) => {
              if (res?.series) {
                this.isSelected.favorit = res.series.isFavorit;
                this.isSelected.fullWatched = res.series.fullWatched;
              }
              console.log(res);
            })
          );
      }
    } catch (error) {
      console.error('Error initializing data:', error);
    }
  }

  public async fullWatched($event: string) {
    if ($event === 'fullWatched') {
      this.isSelected.fullWatched = !this.isSelected.fullWatched;
    } else {
      this.isSelected.favorit = !this.isSelected.favorit;
    }
    try {
      await this.infos.saveInformationsForDb(this.isSelected);
      console.log('this.isSelected', this.isSelected);
    } catch (error) {
      console.error('Error saving information:', error);
    }
  }
}

export interface IInformationsDB {
  fullWatched: boolean;
  favorit: boolean;
}
