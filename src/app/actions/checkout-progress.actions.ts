import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Cart} from '../models/cart/Cart';
import { PaymentInfo } from '../models/payment-info';
import { ShippingMethod } from '../models/cart/ShippingMethod';
import { ShippingInfo } from '../models/shipping-info';
import { OrderInfo } from '../models/order-info';

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
  submitOrderInfo(orderinfo: OrderInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_ORDER_INFO,
      payload: orderinfo
    }
  }

  static SUBMIT_ORDER_INFO_SUCCESS = 'Submit Order Info Success';
  submitOrderInfoSucess(orderinfo: OrderInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_ORDER_INFO_SUCCESS,
      payload: orderinfo
    }
  }

  static SUBMIT_ORDER_INFO_FAIL = 'Submit Order Info Fail';
  submitOrderInfoFail(orderinfo: OrderInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_ORDER_INFO_FAIL,
      payload: orderinfo
    }
  }

  static SUBMIT_SHIPPING_ADDRESS = 'Submit Shipping Address';
  submitShippingAddress(shippingAddress: ShippingInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_SHIPPING_ADDRESS,
      payload: shippingAddress
    }
  }

  static SUBMIT_SHIPPING_ADDRESS_SUCCESS = 'Submit Shipping Address Success';
  submitShippingAddressSuccess(shippingAddress: ShippingInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_SHIPPING_ADDRESS_SUCCESS,
      payload: shippingAddress
    }
  }

  static SUBMIT_SHIPPING_ADDRESS_FAIL = 'Submit Shipping Address Fail';
  submitShippingAddressFail(shippingAddress: ShippingMethod): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_SHIPPING_ADDRESS_FAIL,
      payload: shippingAddress
    }
  }

  static  SUBMIT_SHIPPING_METHOD = 'Submit Shipping Method';
  submitShippingMethod(shippingMethod: ShippingMethod): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_SHIPPING_METHOD,
      payload: shippingMethod
    }
  }

  static  SUBMIT_SHIPPING_METHOD_SUCCESS = 'Submit Shipping Method Success';
  submitShippingMethodSuccess(shippingMethod: ShippingMethod): Action {
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

  static SUBMIT_PAYMENT_INFO = 'Submit Payment Info';
  submitPayment(paymentInfo: PaymentInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_PAYMENT_INFO,
      payload: paymentInfo
    }
  }

  static SUBMIT_PAYMENT_INFO_SUCCESS = 'Submit Payment Info Success';
  submitPaymentSuccess(paymentInfo: PaymentInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_PAYMENT_INFO_SUCCESS,
      payload: paymentInfo
    }
  }

  static SUBMIT_PAYMENT_INFO_FAIL = 'Submit Payment Info Fail';
  submitPaymentFail(paymentInfo: PaymentInfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_PAYMENT_INFO_FAIL,
      payload: paymentInfo
    }
  }

  static SUBMIT_BILLING_ADDRESS = 'Save Billing Address';
  saveBillingAddress(billingAddress): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_BILLING_ADDRESS,
      payload: billingAddress
    }
  }

  static SUBMIT_BILLING_ADDRESS_SUCCESS = 'Save Billing Address Success';
  saveBillingAddressSuccess(billingAddress): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_BILLING_ADDRESS_SUCCESS,
      payload: billingAddress
    }
  }

  static SUBMIT_BILLING_ADDRESS_FAIL = 'Save Billing Address Fail';
  saveBillingAddressFail(billingAddress): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_BILLING_ADDRESS_FAIL,
      payload: billingAddress
    }
  }

  static PLACE_ORDER = 'Place Order';
  placeOrder(cart: Cart): Action {
    return {
      type: CheckoutProgressActions.PLACE_ORDER,
      payload: cart
    }
  }

  static PLACE_ORDER_SUCCESS = 'Place Order Success';
  placeOrderSuccess(cart: Cart): Action {
    return {
      type: CheckoutProgressActions.PLACE_ORDER_SUCCESS,
      payload: cart
    }
  }

  static PLACE_ORDER_FAIL = 'Place Order Fail';
  placeOrderFail(cart: Cart): Action {
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