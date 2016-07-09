import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { NgrxCheckoutAppComponent, environment } from './app/';
import { provideRouter } from '@ngrx/router';
import routes from './app/routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgrxCheckoutAppComponent, [
  provideRouter(routes),
  provideStore({})
]);

