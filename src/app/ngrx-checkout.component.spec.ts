import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgrxCheckoutAppComponent } from '../app/ngrx-checkout.component';

beforeEachProviders(() => [NgrxCheckoutAppComponent]);

describe('App: NgrxCheckout', () => {
  it('should create the app',
      inject([NgrxCheckoutAppComponent], (app: NgrxCheckoutAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ngrx-checkout works!\'',
      inject([NgrxCheckoutAppComponent], (app: NgrxCheckoutAppComponent) => {
    expect(app.title).toEqual('ngrx-checkout works!');
  }));
});
