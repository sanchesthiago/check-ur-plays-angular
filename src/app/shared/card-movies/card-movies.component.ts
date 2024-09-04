import { Component, inject, Input } from '@angular/core';
import { AddMoviesService } from '../service/add-movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movies',
  standalone: true,
  imports: [],
  templateUrl: './card-movies.component.html',
  styleUrl: './card-movies.component.scss',
})
export class CardMoviesComponent {
  private addMoviesService: AddMoviesService = inject(AddMoviesService);
  private router: Router = inject(Router);
  @Input() public corverLink: string = '';

  public getClickCard(value: string): void {
    if (value === 'add') {
      this.addMoviesService.addMovies.set(true);
      return;
    }
    this.router.navigate(['informacao']);
  }
}
