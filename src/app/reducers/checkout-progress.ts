import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import {CheckoutProgressActions} from "../actions/checkout-progress.actions";


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

    default: {
      return state;
    }
  }
}