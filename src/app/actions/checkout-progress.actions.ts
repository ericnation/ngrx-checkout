import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()

/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */
export class CheckoutProgressActions {

  static SUBMIT_ORDER_INFO = 'Submit Order Info';
  submitOrderInfo(orderinfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_ORDER_INFO,
      payload: orderinfo
    }
  }

  static SUBMIT_ORDER_INFO_SUCCESS = 'Submit Order Info Success';
  submitOrderInfoSucess(orderinfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_ORDER_INFO_SUCCESS,
      payload: orderinfo
    }
  }

  static SUBMIT_ORDER_INFO_FAIL = 'Submit Order Info Fail';
  submitOrderInfoFail(orderinfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_ORDER_INFO_FAIL,
      payload: orderinfo
    }
  }

  static SUBMIT_SHIPPING_ADDRESS = 'Submit Shipping Address';
  submitShippingAddress(shippingAddress): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_SHIPPING_ADDRESS,
      payload: shippingAddress
    }
  }

  static SUBMIT_SHIPPING_ADDRESS_SUCCESS = 'Submit Shipping Address Success';
  submitShippingAddressSuccess(shippingAddress): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_SHIPPING_ADDRESS_SUCCESS,
      payload: shippingAddress
    }
  }

  static SUBMIT_SHIPPING_ADDRESS_FAIL = 'Submit Shipping Address Fail';
  submitShippingAddressFail(shippingAddress): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_SHIPPING_ADDRESS_FAIL,
      payload: shippingAddress
    }
  }

  static  SUBMIT_SHIPPING_METHOD = 'Submit Shipping Method';
  submitShippingMethod(shippingMethod): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_SHIPPING_METHOD,
      payload: shippingMethod
    }
  }

  static  SUBMIT_SHIPPING_METHOD_SUCCESS = 'Submit Shipping Method Success';
  submitShippingMethodSuccess(shippingMethod): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_SHIPPING_METHOD_SUCCESS,
      payload: shippingMethod
    }
  }

  static  SUBMIT_SHIPPING_METHOD_FAIL = 'Submit Shipping Method Fail';
  submitShippingMethodFail(shippingMethod): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_SHIPPING_METHOD_FAIL,
      payload: shippingMethod
    }
  }

  static SUBMIT_PAYMENT = 'Submit Payment';
  submitPayment(paymentInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_PAYMENT,
      payload: paymentInfo
    }
  }

  static SUBMIT_PAYMENT_SUCCESS = 'Submit Payment Success';
  submitPaymentSuccess(paymentInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_PAYMENT_SUCCESS,
      payload: paymentInfo
    }
  }

  static SUBMIT_PAYMENT_FAIL = 'Submit Payment Fail';
  submitPaymentFail(paymentInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_PAYMENT_FAIL,
      payload: paymentInfo
    }
  }

  static PLACE_ORDER = 'Place Order';
  placeOrder(cart): Action {
    return {
      type: CheckoutProgressActions.PLACE_ORDER,
      payload: cart
    }
  }

  static PLACE_ORDER_SUCCESS = 'Place Order Success';
  placeOrderSuccess(cart): Action {
    return {
      type: CheckoutProgressActions.PLACE_ORDER_SUCCESS,
      payload: cart
    }
  }

  static PLACE_ORDER_FAIL = 'Place Order Fail';
  placeOrderFail(cart): Action {
    return {
      type: CheckoutProgressActions.PLACE_ORDER_FAIL,
      payload: cart
    }
  }

  static NAVIGATE_TO_ORDER_INFO = 'Navigate to Order Info';
  navigateToOrderInfo(): Action {
    return {
      type: CheckoutProgressActions.NAVIGATE_TO_ORDER_INFO
    }
  }

  static NAVIGATE_TO_SHIPPING = 'Navigate to Shipping';
  navigateToShipping(): Action {
    return {
      type: CheckoutProgressActions.NAVIGATE_TO_SHIPPING
    }
  }

  static NAVIGATE_TO_PAYMENT = 'Navigate to Payment';
  navigateToPayment(): Action {
    return {
      type: CheckoutProgressActions.NAVIGATE_TO_PAYMENT
    }
  }

  static NAVIGATE_TO_REVIEW = 'Navigate to Review';
  navigateToReview(): Action {
    return {
      type: CheckoutProgressActions.NAVIGATE_TO_REVIEW
    }
  }
}