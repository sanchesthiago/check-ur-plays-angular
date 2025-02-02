import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  toTypedRxJsonSchema,
} from 'rxdb';

export const SEASON_DB_SCHEMA_LITERAL = {
  title: 'Season DB Schema',
  version: 0,
  primaryKey: 'id',
  type: 'array',
  properties: {
    id: { type: 'string', primary: true, maxLength: 100 },
    seasons: {
      type: 'array',
      seasons: {
        properties: [
          {
            id: 'string',
            type: 'boolean',
            watched: 'boolean',
          },
        ],
      },
    },
  },
  required: ['id'],
};
const schemaTyped = toTypedRxJsonSchema(SEASON_DB_SCHEMA_LITERAL);
export type RxMessageDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>;
export const SEASON_DB_SCHEMA: RxJsonSchema<RxMessageDocumentType> =
  SEASON_DB_SCHEMA_LITERAL;
