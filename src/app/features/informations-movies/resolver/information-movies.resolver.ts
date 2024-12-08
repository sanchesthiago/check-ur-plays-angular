import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { IInformationsTvShow } from '../interfaces/IInformations';
import { GetInfosTvShowService } from '../service/get-infos-tv-show.service';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Torna o resolver disponível como um serviço global
})
export class InformationMoviesResolver implements Resolve<IInformationsTvShow> {
  private informationService: GetInfosTvShowService = inject(
    GetInfosTvShowService
  );

  resolve(): Observable<IInformationsTvShow> {
    return this.informationService.getInfos();
  }
}
