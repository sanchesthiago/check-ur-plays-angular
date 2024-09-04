import { Component, OnInit } from '@angular/core';
import { SeasonsShowerComponent } from '../../../../shared/seasons-shower/seasons-shower.component';
import { ISeasonInfos } from '../../../../shared/models/IseasonInfos';

@Component({
  selector: 'app-description-movies',
  standalone: true,
  imports: [SeasonsShowerComponent],
  templateUrl: './description-movies.component.html',
  styleUrl: './description-movies.component.scss',
})
export class DescriptionMoviesComponent implements OnInit {
  public seasonInfos: Array<ISeasonInfos> = [];
  ngOnInit(): void {
    this.seasonInfos = [
      { link: '../../../assets/dragao_cover.jpg', season: 1, episodes: 10 },
      { link: '../../../assets/dragao_cover.jpg', season: 2, episodes: 13 },
      { link: '../../../assets/dragao_cover.jpg', season: 3, episodes: 12 },
    ];
  }
}
