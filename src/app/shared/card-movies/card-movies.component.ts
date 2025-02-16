import { Component, inject, Input, ViewChild } from '@angular/core';
import { HandleTvShowsSelected } from '../service/handle-tv-shows-selected.service';
import { Router } from '@angular/router';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import { CommonModule } from '@angular/common';
import { TvShowResponse } from '../../features/home/interfaces/i-home-response';

@Component({
  selector: 'app-card-movies',
  standalone: true,
  imports: [DragScrollComponent, DragScrollItemDirective, CommonModule],
  templateUrl: './card-movies.component.html',
  styleUrl: './card-movies.component.scss',
})
export class CardMoviesComponent {
  private handleTvShowsSelected: HandleTvShowsSelected = inject(
    HandleTvShowsSelected
  );
  private router: Router = inject(Router);
  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;
  @Input() public popularList!: Array<Partial<TvShowResponse>>;

  public getClickCard($event: number): void {
    if (this.popularList && this.popularList.length > $event) {
      this.handleTvShowsSelected.selectedTvShow.set(this.popularList[$event]);
    } else {
      console.warn('Índice fora do alcance do array ou array indefinido.');
    }
    this.router.navigate(['informacao']);
  }

  moveLeft() {
    5;
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index: any) {
    this.ds.moveTo(index);
  }
}
