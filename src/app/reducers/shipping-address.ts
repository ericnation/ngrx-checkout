import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { CheckoutProgressActions } from '../actions/checkout-progress.actions';

export interface ShippingAddressState {
  loaded: boolean;
  loading: boolean;
  shippingAddress: {};
}

const initialState: ShippingAddressState = {
  loaded: false,
  loading: false,
  shippingAddress: {}
};

export default function(state = initialState, action: Action): ShippingAddressState {
  switch (action.type) {

    case CheckoutProgressActions.SUBMIT_SHIPPING_ADDRESS_SUCCESS: {
      const shippingAddress = action.payload;
      return {
        loaded: true,
        loading: false,
        shippingAddress: shippingAddress
      }

    }

    default: {
      return state;
    }
  }
}