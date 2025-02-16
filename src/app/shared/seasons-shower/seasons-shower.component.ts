import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HandleTvShowsSelected } from '../service/handle-tv-shows-selected.service';
import { GetInfosTvShowService } from '../../features/informations/service/get-infos-tv-show.service';
import { InterationDbService } from '../service/interationDb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seasons-shower',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seasons-shower.component.html',
  styleUrl: './seasons-shower.component.scss',
})
export class SeasonsShowerComponent {
  @Input() season!: string;
  @Input() episodes!: number;
  @Input() link!: string | null;
  @Input() index!: any;
  @Input() watched!: boolean | undefined;
  private router: Router = inject(Router);
  private handleTvShowsSelected: HandleTvShowsSelected = inject(
    HandleTvShowsSelected
  );
  public infos: GetInfosTvShowService = inject(GetInfosTvShowService);
  private interactionDb: InterationDbService = inject(InterationDbService);

  sendToEpisodes(index: any) {
    this.handleTvShowsSelected.selectedSeason.set(
      //@ts-ignore
      this.infos.infosTvShow$().seasons[index]
    );
    this.router.navigate(['destalhes-temporadas']);
  }

  watchedSeason(index: number, event: any): void {
    this.watched = !this.watched;

    //@ts-ignore
    const selectedSeason = this.infos.infosTvShow$().seasons[index];
    this.interactionDb.save(selectedSeason.id.toString(), this.watched);
    event?.stopPropagation();
  }
}
