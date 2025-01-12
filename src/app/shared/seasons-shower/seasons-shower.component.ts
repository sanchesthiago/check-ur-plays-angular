import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HandleTvShowsSelected } from '../service/handle-tv-shows-selected.service';
import { GetInfosTvShowService } from '../../features/informations/service/get-infos-tv-show.service';

@Component({
  selector: 'app-seasons-shower',
  standalone: true,
  imports: [],
  templateUrl: './seasons-shower.component.html',
  styleUrl: './seasons-shower.component.scss',
})
export class SeasonsShowerComponent {
  private router: Router = inject(Router);
  private handleTvShowsSelected: HandleTvShowsSelected = inject(
    HandleTvShowsSelected
  );
  @Input() season!: string;
  @Input() episodes!: number;
  @Input() link!: string | null;
  @Input() index!: any;
  public infos: GetInfosTvShowService = inject(GetInfosTvShowService);

  sendToEpisodes(index: any) {
    this.handleTvShowsSelected.selectedSeason.set(
      //@ts-ignore
      this.infos.infosTvShow$().seasons[index]
    );
    this.router.navigate(['destalhes-temporadas']);
  }
}
