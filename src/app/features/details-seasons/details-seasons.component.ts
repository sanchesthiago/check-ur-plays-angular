import { Component, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { DetailSeasonsService } from './service/details-seasons.service';
import { InterationDbService } from '../../shared/service/interationDb.service';
import { Episode } from './interface/detailsSeason';
import { IEpisodeComponent } from '../../shared/interfaces/interface-component/i-episode-component';

@Component({
  selector: 'app-details-seasons',
  standalone: true,
  imports: [NgStyle, HeaderComponent],
  templateUrl: './details-seasons.component.html',
  styleUrl: './details-seasons.component.scss',
})
export class DetailsSeasonsComponent {
  public episodesSeriesService: DetailSeasonsService =
    inject(DetailSeasonsService);
  private interactionDb: InterationDbService = inject(InterationDbService);

  watchedEpisode(index: number): void {
    const selectedEpisode =
      this.episodesSeriesService.infosEpisodesSeries$()[index];
    let watched = selectedEpisode.watched;
    watched = !watched;
    this.interactionDb.saveEpisode(selectedEpisode.id.toString(), watched);
    this.episodesSeriesService.infosEpisodesSeries.update(
      (episodes: Array<IEpisodeComponent>) => {
        episodes[index].watched = watched;
        return episodes;
      }
    );

    console.log('Episódio assistido', selectedEpisode);
    console.log('Episódio', watched);
  }
}
