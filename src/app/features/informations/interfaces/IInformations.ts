import { Signal } from '@angular/core';
import { IDbSerieComponent } from '../../../shared/interfaces/IDbSerieComponent';

export interface IInformationsTvShow {
  id: number; // ID da série
  adult: boolean; // Indica se o conteúdo é adulto
  created_by: Array<created_by>; // Array com informações dos criadores
  backdrop_path: string; // URL completa do backdrop
  name: string; // Nome da série
  genres: string[]; // Apenas os nomes dos gêneros
  overview: string; // Resumo da série
  poster: string;
  poster_path: string; // URL completa do poster
  voteAverage: number; // Média de votos
  number_of_episodes: number; // Número total de episódios
  number_of_seasons: number; // Número total de temporadas
  original_name: string; // Nome original da série
  seasons: Array<ISeasons>;
  informationFromDb: any;
}

export interface ISeasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string; // URL do poster ou `null` se não houver
  season_number: number;
  vote_average: number;
}

export interface created_by {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null; // Pode ser `null` se não houver imagem de perfil
}
