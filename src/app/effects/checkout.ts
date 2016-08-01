import { Injectable } from "@angular/core";
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import { AppState } from '../reducers/index';
import { CheckoutActions } from '../actions/checkout-actions';
import { CheckoutServices } from '../services/services';
import { CheckoutProgressActions } from '../actions/checkout-progress.actions';


@Injectable()

export class CheckoutEffects {
  constructor(
      private update$: StateUpdates<AppState>,
      private checkoutActions: CheckoutActions,
      private checkoutProgressActions: CheckoutProgressActions,
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

  @Effect() saveOrderInfo$ = this.update$
      .whenAction(CheckoutProgressActions.SUBMIT_ORDER_INFO)
      .map(update => update.action.payload)
      .switchMap(orderinfo => this.service.saveOrderInfo(orderinfo))
      .map(orderinfo => this.checkoutProgressActions.submitOrderInfoSucess(orderinfo));

  @Effect() saveShippingInfo$ = this.update$
      .whenAction(CheckoutProgressActions.SUBMIT_SHIPPING_ADDRESS)
      .map(update => update.action.payload)
      .switchMap(shippingAddress => this.service.saveShippingInfo(shippingAddress))
      .map(shippingAddress => this.checkoutProgressActions.submitShippingAddressSuccess(shippingAddress));

  @Effect() saveShippingMethod$ = this.update$
      .whenAction(CheckoutProgressActions.SUBMIT_SHIPPING_METHOD)
      .map(update => update.action.payload)
      .switchMap(shippingMethod => this.service.saveShippingMethod(shippingMethod))
      .map(shippingMethod => this.checkoutProgressActions.submitShippingMethodSuccess(shippingMethod));

  @Effect() savePaymentInfo$ = this.update$
      .whenAction(CheckoutProgressActions.SUBMIT_PAYMENT)
      .map(update => update.action.payload)
      .switchMap(paymentInfo => this.service.savePaymentInfo(paymentInfo))
      .map(paymentInfo => this.checkoutProgressActions.submitPaymentSuccess(paymentInfo));
}