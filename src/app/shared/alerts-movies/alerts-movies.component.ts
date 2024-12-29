import { Component, inject, Input } from '@angular/core';
import { HandleTvShowsSelected } from '../service/handle-tv-shows-selected.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-alerts-movies',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './alerts-movies.component.html',
  styleUrl: './alerts-movies.component.scss',
})
export class AlertsMoviesComponent {
  public addMoviesService: HandleTvShowsSelected = inject(
    HandleTvShowsSelected
  );
  @Input() enable: boolean = false;

  // toggleAlert() {
  //   this.addMoviesService.selectedTvShow.set(false);
  // }
}
