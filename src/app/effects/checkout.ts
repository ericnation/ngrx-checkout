import { Injectable } from "@angular/core";
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import { AppState } from '../reducers/index';
import { CheckoutActions } from '../actions/checkout-actions';
import { CheckoutServices } from '../services/services';


@Injectable()

export class CheckoutEffects {
  constructor(
      private update$: StateUpdates<AppState>,
      private checkoutActions: CheckoutActions,
      private service: CheckoutServices
  ) {}

  @Effect() loadCart$ = this.update$
      .whenAction(CheckoutActions.LOAD_CART)
      .switchMap(() => this.service.getCart())
      .map(cart => this.checkoutActions.loadCartSuccess(cart));

  @Effect() loadCheckoutSettings$ = this.update$
      .whenAction(CheckoutActions.LOAD_CHECKOUT_SETTINGS)
      .switchMap(() => this.service.getCheckoutSettings())
      .map(checkoutSettings => this.checkoutActions.loadCheckoutSettingsSuccess(checkoutSettings));
}