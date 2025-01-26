import { Component, inject, OnInit } from '@angular/core';
import { GetInfosTvShowService } from '../../service/get-infos-tv-show.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actions-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actions-movies.component.html',
  styleUrls: ['./actions-movies.component.scss'],
})
export class ActionsMoviesComponent implements OnInit {
  public infos: GetInfosTvShowService = inject(GetInfosTvShowService);
  private isSelected: IInformationsDB = {
    fullWatched: false,
    favorit: false,
  };

  ngOnInit(): void {
    this.initializeSelectedInfo();
  }

  // Método para inicializar a variável isSelected com os valores do banco de dados
  private async initializeSelectedInfo(): Promise<void> {
    try {
      const infosTvShow = await this.infos.getInformationfromDb2();
      if (infosTvShow && infosTvShow._data) {
        this.isSelected.fullWatched = infosTvShow._data.series.fullWatched;
        this.isSelected.favorit = infosTvShow._data.series.isFavorit;
        console.log('this.infos', this.isSelected);
      }
    } catch (error) {
      console.error('Error fetching information from DB:', error);
    }
  }

  // Método para salvar as informações no banco de dados
  public async fullWatched(event: string): Promise<void> {
    if (event === 'fullWatched') {
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
