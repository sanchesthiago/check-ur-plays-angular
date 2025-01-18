import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump';
import { Injectable } from '@angular/core';
import { createRxDatabase, addRxPlugin } from 'rxdb/plugins/core';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { SERIE_DB_SCHEMA } from '../interfaces/series-db.model';
import { RxSerieDatabase } from '../../RxDB';
addRxPlugin(RxDBJsonDumpPlugin);

async function createDataBase(): Promise<any> {
  const db = await createRxDatabase<any>({
    name: 'series-db',
    storage: getRxStorageDexie(),
  });

  await db.addCollections({
    seriesDataBase: {
      schema: SERIE_DB_SCHEMA,
    },
  });

  // const myColletion = db.seriesDataBase;
  // myColletion.exportJSON().then((json: any) => console.dir(json));
  return db;
}
let initState: null | Promise<any>;
let DB_INSTANCE: any;

export async function initDatabase() {
  if (!initState) {
    initState = createDataBase().then((db) => (DB_INSTANCE = db));
  }
  await initState;
}

@Injectable({
  providedIn: 'root',
})
export class DbService {
  get db(): RxSerieDatabase {
    return DB_INSTANCE;
  }
  constructor() {}
}
