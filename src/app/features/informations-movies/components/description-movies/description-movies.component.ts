import { Component, inject, OnInit } from '@angular/core';
import { SeasonsShowerComponent } from '../../../../shared/seasons-shower/seasons-shower.component';
import { GetInfosTvShowService } from '../../service/get-infos-tv-show.service';

@Component({
  selector: 'app-description-movies',
  standalone: true,
  imports: [SeasonsShowerComponent],
  templateUrl: './description-movies.component.html',
  styleUrl: './description-movies.component.scss',
})
export class DescriptionMoviesComponent {
  public infos: GetInfosTvShowService = inject(GetInfosTvShowService);
}
