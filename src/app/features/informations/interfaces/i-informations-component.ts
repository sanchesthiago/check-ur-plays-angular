import { ISeasonsComponent } from './i-season-component';

export interface IInformationsTvShowComponent {
  backdrop_path: string; // URL completa do backdrop
  id: number; // ID da série
  name: string; // Nome da série
  original_name: string; // Nome original da série
  overview: string; // Resumo da série
  poster: string;
  poster_path: string; // URL completa do poster
  seasons: Array<ISeasonsComponent>;
  serieInformationFromDb: any;
}
