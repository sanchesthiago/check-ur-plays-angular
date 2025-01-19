export interface IDbSerieComponent {
  id: string;
  series: serieDB;
  seasons: {
    season: seasonAndEpisodeDB;
  };
  epsisodes: {
    episode: seasonAndEpisodeDB;
  };
}

export interface serieDB {
  id: string;
  fullWatched: boolean;
  isFavorit: boolean;
}
export interface seasonAndEpisodeDB {
  properties: Array<propertySeasonAndEpisodeDB>;
}

export interface propertySeasonAndEpisodeDB {
  id: string;
  type: boolean;
  watched: boolean;
}
