import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { CheckoutProgressActions } from '../actions/checkout-progress.actions';


export type CheckoutProgressState =  {
  orderInfoActive: boolean;
  orderInfoComplete: boolean;
  shippingActive: boolean;
  shippingComplete: boolean;
  billingActive: boolean;
  billingComplete: boolean;
  reviewAndPayActive: boolean;
  reviewAndPayComplete: boolean;
  checkoutComplete: boolean;
}

const initialState: CheckoutProgressState = {
  orderInfoActive: true,
  orderInfoComplete: false,
  shippingActive: false,
  shippingComplete: false,
  billingActive: false,
  billingComplete: false,
  reviewAndPayActive: false,
  reviewAndPayComplete: false,
  checkoutComplete: false
};

export default function(state = initialState, action: Action): CheckoutProgressState {
  switch (action.type) {

    case CheckoutProgressActions.SUBMIT_ORDER_INFO_SUCCESS: {
      return Object.assign({}, state, {
        orderInfoActive: false,
        orderInfoComplete: true,
        shippingActive: true
      });

    }

    case CheckoutProgressActions.SUBMIT_SHIPPING_METHOD_SUCCESS: {
      return Object.assign({}, state, {
        shippingActive: false,
        shippingComplete: true,
        billingActive: true
      });
    }

    case CheckoutProgressActions.SUBMIT_PAYMENT_SUCCESS: {
      return Object.assign({}, state, {
        billingActive: false,
        billingComplete: true,
        reviewAndPayActive: true
      });
    }

    case CheckoutProgressActions.PLACE_ORDER_SUCCESS: {
      return Object.assign({}, state, {
        reviewAndPayActive: false,
        reviewAndPayComplete: true,
        checkoutComplete: true
      });
    }

    case CheckoutProgressActions.NAVIGATE_TO_ORDER_INFO: {
      return Object.assign({}, state, {
        orderInfoActive: true
      });
    }

    case CheckoutProgressActions.NAVIGATE_TO_SHIPPING: {
      return Object.assign({}, state, {
        shippingActive: true
      });
    }

    case CheckoutProgressActions.NAVIGATE_TO_PAYMENT: {
      return Object.assign({}, state, {
        billingActive: true
      });
    }

    case CheckoutProgressActions.NAVIGATE_TO_REVIEW: {
      return Object.assign({}, state, {
        reviewAndPayActive: true
      })
    }

    default: {
      return state;
    }
  }
}