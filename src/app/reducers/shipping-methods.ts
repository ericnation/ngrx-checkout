import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';

import { CheckoutActions } from '../actions/checkout-actions';


export interface ShippingMethodsState {
  loaded: boolean;
  loading: boolean;
  shippingMethods: {};
}

const initialState: ShippingMethodsState = {
  loaded: false,
  loading: false,
  shippingMethods: {}
};

export default function(state = initialState, action: Action): ShippingMethodsState {
  switch (action.type) {

    case CheckoutActions.LOAD_SHIPPING_METHODS: {
      return Object.assign({}, state, {
        loading: true
      })
    }

    case CheckoutActions.LOAD_SHIPPING_METHODS_SUCCESS: {
      const shippingMethods = action.payload;
      return {
        loaded: true,
        loading: false,
        shippingMethods: shippingMethods
      }
    }
    default: {
      return state;
    }
  }
}