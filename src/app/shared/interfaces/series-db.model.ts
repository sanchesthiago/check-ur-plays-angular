import { Version } from '@angular/core';
import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  toTypedRxJsonSchema,
} from 'rxdb';

export const SERIES_DB_SCHEMA_LITERAL = {
  title: 'Series DB Schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: { type: 'string', primary: true, maxLength: 100 },
    series: {
      id: 'string',
      type: 'boolean',
      fullWatched: 'boolean',
      isFavorit: 'boolean',
    },
    // content: { type: 'string' },
    // timestamp: { type: 'date-time' },
  },
  required: ['id'],
};
const schemaTyped = toTypedRxJsonSchema(SERIES_DB_SCHEMA_LITERAL);
export type RxMessageDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>;
export const SERIE_DB_SCHEMA: RxJsonSchema<RxMessageDocumentType> =
  SERIES_DB_SCHEMA_LITERAL;

export const SERIE_MOCK = {
  id: '52',
  serie: {
    type: true,
    fullWatched: true,
    isFavorit: true,
  },
};
export const SEASON_MOCK_2 = {
  id: '52',
  season: {
    properties: [
      {
        id: '1',
        type: true,
        watched: true,
      },
      {
        id: '2',
        type: true,
        watched: true,
      },
      {
        id: '3',
        type: true,
        watched: true,
      },
    ],
  },
};
export const EPISODE_MOCK_3 = {
  id: '52',
  epsisodes: {
    properties: [
      {
        id: '1',
        type: true,
        watched: true,
      },
      {
        id: '2',
        type: true,
        watched: true,
      },
      {
        id: '3',
        type: true,
        watched: true,
      },
    ],
  },
};
