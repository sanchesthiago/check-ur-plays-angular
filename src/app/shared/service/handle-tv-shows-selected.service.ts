import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { TvShow } from '../../features/home/interfaces/IHomeInterface';
import { ISeasons } from '../../features/informations/interfaces/IInformations';

@Injectable({
  providedIn: 'root',
})
export class HandleTvShowsSelected {
  public selectedTvShow: WritableSignal<Partial<TvShow>> = signal({});
  public selectedTvShow$: Signal<Partial<TvShow>> = this.selectedTvShow;

  public selectedSeason: WritableSignal<Partial<ISeasons>> = signal({});
  public selectedSeason$: Signal<Partial<ISeasons>> = this.selectedSeason;
}
