import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NgrxCheckoutAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgrxCheckoutAppComponent);

