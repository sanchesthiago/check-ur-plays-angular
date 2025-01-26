import {
  APP_INITIALIZER,
  ApplicationConfig,
  Injector,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initDatabase } from './shared/service/db.service';

export function initializeDatabase(injector: Injector) {
  return () => initDatabase(injector);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDatabase,
      deps: [Injector],
      multi: true,
    },
  ],
};
