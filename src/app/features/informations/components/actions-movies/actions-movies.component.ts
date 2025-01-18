import { Component, inject } from '@angular/core';
import { GetInfosTvShowService } from '../../service/get-infos-tv-show.service';
import { DbService } from '../../../../shared/service/db.service';

@Component({
  selector: 'app-actions-movies',
  standalone: true,
  imports: [],
  templateUrl: './actions-movies.component.html',
  styleUrl: './actions-movies.component.scss',
})
export class ActionsMoviesComponent {
  public isSelected: IInformationsDB = {
    fullWatched: false,
    favorit: false,
  };
  public infos: GetInfosTvShowService = inject(GetInfosTvShowService);
  private dbSvc: DbService = inject(DbService);

  public async fullWatched($event: string) {
    // this.isSelected = !this.isSelected;
    if ($event === 'fullWacthed') {
      this.isSelected.fullWatched = !this.isSelected.fullWatched;
    } else {
      this.isSelected.favorit = !this.isSelected.favorit;
    }
    this.infos.saveInformationsForDb(this.isSelected);
    console.log('this.isSelected', this.isSelected);
  }
  // public async favorite() {
  //   this.isSelected = !this.isSelected;
  //   try {
  //     await this.dbSvc.db.seriesDataBase.upsert({
  //       id: this.infos.infosTvShow$().id?.toString(),
  //       serie: {
  //         id: '2',
  //         isFavorit: this.isSelected,
  //       },
  //     });
  //   } catch (error) {
  //     alert('Deu Ruim');
  //     console.error(error);
  //     throw error;
  //   }

  //   console.log('this.isSelected', this.isSelected);
  // }
}
export interface IInformationsDB {
  fullWatched: boolean;
  favorit: boolean;
}
