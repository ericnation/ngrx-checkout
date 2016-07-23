import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import { runEffects } from '@ngrx/effects';
import { provideRouter, ROUTER_DIRECTIVES } from '@ngrx/router';
import { PLATFORM_DIRECTIVES } from '@angular/core';

import { NgrxCheckoutAppComponent, environment } from './app/';
import routes from './app/routes';
import effects from './app/effects';
import actions from './app/actions';
import reducer from './app/reducers';
import services from './app/services';

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
  provideStore(reducer),

  /**
   * runEffects configures all providers for @ngrx/effects. Observables decorated
   * as an @Effect() within the supplied services will ultimately be merged,
   * with output of relevant (registered as effects) actions being
   * dispatched into your application store. Any side-effects in
   * your application should be registered as effects.
   *
   * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
   */
  runEffects(effects),

  /**
   * instrumentStore() sets up the @ngrx/store-devtools providers
   */
  instrumentStore({
    monitor: useLogMonitor({
      position: 'right',
      visible: true
    })
  }),
  services,
  actions,
  disableDeprecatedForms(),
  provideForms(),
  /**
   * Make router directives available to all components
   */
  { provide: PLATFORM_DIRECTIVES, useValue: [ROUTER_DIRECTIVES], multi: true }
])
  .catch((err: any) => console.error(err));

