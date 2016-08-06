import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';

import { CheckoutProgressActions } from '../actions/checkout-progress.actions';


export interface ShippingMethodState {
  loaded: boolean;
  loading: boolean;
  shippingMethod: {};
}

const initialState: ShippingMethodState = {
  loaded: false,
  loading: false,
  shippingMethod: {}
};

export default function(state = initialState, action: Action): ShippingMethodState {
  switch (action.type) {

    case CheckoutProgressActions.SUBMIT_SHIPPING_METHOD_SUCCESS: {
      const shippingMethod = action.payload;
      return {
        loaded: true,
        loading: false,
        shippingMethod: shippingMethod
      }
    }
    default: {
      return state;
    }
  }
}