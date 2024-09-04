import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddMoviesService {
  public addMovies: WritableSignal<boolean> = signal(false);
  public addMovies$: Signal<boolean> = this.addMovies;
}
