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
    seasons: {
      type: 'array',
      season: {
        type: 'object',
        properties: [
          {
            id: 'string',
            type: 'boolean',
            watched: 'boolean',
          },
        ],
      },
    },
    epsisodes: {
      type: 'array',
      episode: {
        type: 'object',
        properties: [
          {
            id: 'string',
            type: 'boolean',
            watched: 'boolean',
          },
        ],
      },
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
    id: '2',
    type: true,
    fullWatched: true,
    isFavorit: true,
  },
  seasons: {
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
  },
  epsisodes: {
    episode: {
      properties: [
        {
          id: '1',
          type: true,
          watched: true,
        },
        {
          id: '2',

          watched: true,
        },
        {
          id: '3',

          watched: true,
        },
      ],
    },
  },
};
