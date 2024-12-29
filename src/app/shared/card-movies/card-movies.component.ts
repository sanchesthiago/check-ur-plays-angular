import { Component, inject, Input, ViewChild } from '@angular/core';
import { HandleTvShowsSelected } from '../service/handle-tv-shows-selected.service';
import { Router } from '@angular/router';
import { TvShow } from '../../features/top-buttons/interfaces/IHomeInterface';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import { CommonModule } from '@angular/common';
import { HomeTvShowService } from '../../features/top-buttons/service/home-tv-show.service';

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
  @Input() public popularList!: Array<Partial<TvShow>>;

  public getClickCard($event: number): void {
    if (this.popularList && this.popularList.length > $event) {
      const selectedObject = this.popularList[$event]; // Obtém o objeto do array
      this.handleTvShowsSelected.selectedTvShow.set(this.popularList[$event]);
      console.log('Objeto selecionado:', selectedObject);
    } else {
      console.warn('Índice fora do alcance do array ou array indefinido.');
    }
    this.router.navigate(['informacao']);
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index: any) {
    this.ds.moveTo(index);
  }

  // getIndex($event: number) {
  //   if (this.popularList && this.popularList.length > $event) {
  //     const selectedObject = this.popularList[$event]; // Obtém o objeto do array
  //     console.log('Objeto selecionado:', selectedObject);
  //   } else {
  //     console.warn('Índice fora do alcance do array ou array indefinido.');
  //   }
  // }
}
