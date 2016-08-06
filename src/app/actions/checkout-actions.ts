import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Cart, CheckoutSettings, ShippingMethod, ShippingInfo } from '../models';

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

  static LOAD_CART_ITEMS = '[Cart] Load Cart Items';
  loadCartItems(): Action {
    return {
      type: CheckoutActions.LOAD_CART_ITEMS
    }
  }

  static LOAD_CART_ITEMS_SUCCESS = '[Cart] Load Cart Items Success';
  loadCartItemsSuccess(Items: Cart): Action {
    return {
      type: CheckoutActions.LOAD_CART_ITEMS_SUCCESS,
      payload: Items
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

  static LOAD_SHIPPING_ADDRESS = '[ShippingInfo] Load Shipping Address';
  loadShippingAddress(): Action {
    return {
      type: CheckoutActions.LOAD_SHIPPING_ADDRESS
    }
  }

  static LOAD_SHIPPING_ADDRESS_SUCCESS = '[ShippingInfo] Load Shipping Address Success';
  loadShippingAddressSuccess(ShippingAddress: ShippingInfo): Action {
    return {
      type: CheckoutActions.LOAD_SHIPPING_ADDRESS_SUCCESS,
      payload: ShippingAddress
    }
  }

}