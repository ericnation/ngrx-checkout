import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { provideStore } from '@ngrx/store';
import { NgrxCheckoutAppComponent, environment } from './app/';
import { provideRouter, ROUTER_DIRECTIVES } from '@ngrx/router';
import { PLATFORM_DIRECTIVES } from '@angular/core';
import routes from './app/routes';

import 'lodash';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgrxCheckoutAppComponent, [
  /**
   * provideRouter sets up all of the providers for @angular/router. It accepts
   * an array of routes and a location strategy. By default, it will use
   * `PathLocationStrategy`.
   */
  provideRouter(routes),
  /**
   * provideStore is run once at application bootstrap, accepting a reducer
   * function or object map of reducer functions. If passed an object of
   * reducers, combineReducers will be run creating your application
   * meta-reducer. This returns all providers for an @ngrx/store
   * based application.
   *
   * Source: https://github.com/ngrx/store/blob/master/src/ng2.ts#L43-L69
   */
  provideStore({}),
  disableDeprecatedForms(),
  provideForms(),
  /**
   * Make router directives available to all components
   */
  { provide: PLATFORM_DIRECTIVES, useValue: [ROUTER_DIRECTIVES], multi: true }
])
  .catch((err: any) => console.error(err));

