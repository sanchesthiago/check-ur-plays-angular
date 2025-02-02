import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump';
import { Injectable, Signal, untracked, Injector } from '@angular/core';
import {
  createRxDatabase,
  addRxPlugin,
  RxReactivityFactory,
} from 'rxdb/plugins/core';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { SERIE_DB_SCHEMA } from '../interfaces/series-db.model';
import { RxSerieDatabase } from '../../RxDB';
import { toSignal } from '@angular/core/rxjs-interop';
import { SEASON_DB_SCHEMA } from '../interfaces/season-db.model';
import { EPISODE_DB_SCHEMA } from '../interfaces/episode-db.model';

addRxPlugin(RxDBJsonDumpPlugin);

async function createDataBase(injector: Injector): Promise<any> {
  const reactivityFactory: RxReactivityFactory<Signal<any>> = {
    fromObservable(obs, initialValue: any) {
      return untracked(() =>
        toSignal(obs, {
          initialValue,
          injector,
          rejectErrors: true,
        })
      );
    },
  };
  const db = await createRxDatabase<any>({
    name: 'series-db',
    storage: getRxStorageDexie(),
    reactivity: reactivityFactory,
  });
  console.log('DatabaseService: created database');

  await db.addCollections({
    seriesDataBase: {
      schema: SERIE_DB_SCHEMA,
    },
    seasonDataBase: {
      schema: SEASON_DB_SCHEMA,
    },
    episodeDataBase: {
      schema: EPISODE_DB_SCHEMA,
    },
  });

  // const myColletion = db.seriesDataBase;
  // myColletion.exportJSON().then((json: any) => console.dir(json));
  return db;
}
let initState: null | Promise<any>;
let DB_INSTANCE: any;

export async function initDatabase(injector: Injector) {
  if (!injector) {
    throw new Error('initDatabase() injector missing');
  }
  if (!initState) {
    initState = createDataBase(injector).then((db) => (DB_INSTANCE = db));
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
}
