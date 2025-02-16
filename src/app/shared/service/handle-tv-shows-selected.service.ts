import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ISeasonsResponse } from '../../features/informations/interfaces/i-informations-response';
import { TvShowResponse } from '../../features/home/interfaces/i-home-response';

@Injectable({
  providedIn: 'root',
})
export class HandleTvShowsSelected {
  public selectedTvShow: WritableSignal<Partial<TvShowResponse>> = signal({});
  public selectedTvShow$: Signal<Partial<TvShowResponse>> = this.selectedTvShow;

  public selectedSeason: WritableSignal<Partial<ISeasonsResponse>> = signal({});
  public selectedSeason$: Signal<Partial<ISeasonsResponse>> =
    this.selectedSeason;
}
