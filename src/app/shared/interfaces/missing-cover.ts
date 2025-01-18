export interface IMissingCover {
  seasons: string;
  episodes: string;
}

export const schema = {
  title: 'hero schema',
  primaryKey: 'name',
  series: {
    id: 'string',
    fullWatched: 'boolean',
    isFavorit: 'boolean',
  },
  seasons: [
    {
      id: 'string',
      watched: 'boolean',
    },
  ],
  epsodes: [
    {
      id: 'string',
      watched: 'boolean',
    },
  ],
};
