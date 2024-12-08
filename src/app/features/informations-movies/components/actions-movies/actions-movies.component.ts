import { Component, inject } from '@angular/core';
import { GetInfosTvShowService } from '../../service/get-infos-tv-show.service';

@Component({
  selector: 'app-actions-movies',
  standalone: true,
  imports: [],
  templateUrl: './actions-movies.component.html',
  styleUrl: './actions-movies.component.scss',
})
export class ActionsMoviesComponent {
  public infos: GetInfosTvShowService = inject(GetInfosTvShowService);
}
