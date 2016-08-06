import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Cart, CheckoutSettings, ShippingMethod } from '../models';

@Injectable()

/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */

export class CheckoutActions {
  static LOAD_CART = '[Cart] Load Cart';
  loadCart(): Action {
    return {
      type: CheckoutActions.LOAD_CART
    }
  }

  static LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
  loadCartSuccess(cart: Cart): Action {
    return {
      type: CheckoutActions.LOAD_CART_SUCCESS,
      payload: cart
    }
  }

  static LOAD_CHECKOUT_SETTINGS = '[CheckoutSettings] Load Checkout Settings';
  loadCheckoutSettings(): Action {
    return {
      type: CheckoutActions.LOAD_CHECKOUT_SETTINGS
    }
  }

  static LOAD_CHECKOUT_SETTINGS_SUCCESS = '[CheckoutSettings] Load Checkout Settings Success';
  loadCheckoutSettingsSuccess(checkoutSettings: CheckoutSettings): Action {
    return {
      type: CheckoutActions.LOAD_CHECKOUT_SETTINGS_SUCCESS,
      payload: checkoutSettings
    }
  }

  static LOAD_SHIPPING_METHODS = 'Load Shipping Methods';
  loadShippingMethods(): Action {
    return {
      type: CheckoutActions.LOAD_SHIPPING_METHODS
    }
  }

  static LOAD_SHIPPING_METHODS_SUCCESS = 'Load Shipping Methods Success';
  loadShippingMethodsSuccess(shippingMethods: ShippingMethod): Action {
    return {
      type: CheckoutActions.LOAD_SHIPPING_METHODS_SUCCESS,
      payload: shippingMethods
    }

  }

  static LOAD_SHIPPING_METHOD = 'Load Shipping Method';
  loadShippingMethod(): Action {
    return {
      type: CheckoutActions.LOAD_SHIPPING_METHOD
    }
  }

  static LOAD_SHIPPING_METHOD_SUCCESS = 'Load Shipping Method Success';
  loadShippingMethodSuccess(shippingMethod: ShippingMethod): Action {
    return {
      type: CheckoutActions.LOAD_SHIPPING_METHODS_SUCCESS,
      payload: shippingMethod
    }

  }

  static LOAD_
}