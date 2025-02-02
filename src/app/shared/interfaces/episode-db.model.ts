import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  toTypedRxJsonSchema,
} from 'rxdb';

export const EPISODE_DB_SCHEMA_LITERAL = {
  title: 'Epsode DB Schema',
  version: 0,
  primaryKey: 'id',
  type: 'array',
  properties: {
    id: { type: 'string', primary: true, maxLength: 100 },
    episode: {
      type: 'array',
      episodes: {
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
const schemaTyped = toTypedRxJsonSchema(EPISODE_DB_SCHEMA_LITERAL);
export type RxMessageDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>;
export const EPISODE_DB_SCHEMA: RxJsonSchema<RxMessageDocumentType> =
  EPISODE_DB_SCHEMA_LITERAL;
