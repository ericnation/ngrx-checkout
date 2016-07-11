import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { provideStore } from '@ngrx/store';
import { NgrxCheckoutAppComponent, environment } from './app/';
import { provideRouter } from '@ngrx/router';
import routes from './app/routes';

import 'lodash';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgrxCheckoutAppComponent, [
  provideRouter(routes),
  provideStore({}),
  disableDeprecatedForms(),
  provideForms()
])
  .catch((err: any) => console.error(err));

