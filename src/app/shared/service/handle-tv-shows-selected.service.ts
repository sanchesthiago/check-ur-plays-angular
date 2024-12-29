import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { TvShow } from '../../features/top-buttons/interfaces/IHomeInterface';

@Injectable({
  providedIn: 'root',
})
export class HandleTvShowsSelected {
  public selectedTvShow: WritableSignal<Partial<TvShow>> = signal({
    backdrop_path: '',
    id: 0,
    name: '',
    overview: '',
  });
  public selectedTvShow$: Signal<Partial<TvShow>> = this.selectedTvShow;
}
