import { Component, inject, Input } from '@angular/core';
import { AddMoviesService } from '../service/add-movies.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-alerts-movies',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './alerts-movies.component.html',
  styleUrl: './alerts-movies.component.scss',
})
export class AlertsMoviesComponent {
  public addMoviesService: AddMoviesService = inject(AddMoviesService);
  @Input() enable: boolean = false;

  toggleAlert() {
    this.addMoviesService.addMovies.set(false);
  }
}
