/**
 * custom typings so typescript knows about the schema-fields
 */

import type { RxDocument, RxCollection, RxDatabase } from 'rxdb';
import { RxHeroDocumentType as RxSerieDBDocumentType } from './schemas/hero.schema';
import { Signal } from '@angular/core';

// ORM methods
type RxHeroDocMethods = {
  hpPercent(): number;
};

export type RxSerieDBDocument = RxDocument<RxSerieDBDocumentType, {}>;

export type RxSerieDBCollection = RxCollection<RxSerieDBDocumentType, {}, {}>;

export type RxSerieDBCollections = {
  seriesDataBase: RxSerieDBCollection;
  seasonDataBase;
  episodeDataBase;
};

export type RxSerieDatabase = RxDatabase<RxSerieDBCollections>;
