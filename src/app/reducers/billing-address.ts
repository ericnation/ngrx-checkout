import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { CheckoutProgressActions } from '../actions/checkout-progress.actions';

export interface BillingAddressState {
  loaded: boolean;
  loading: boolean;
  billingAddress: {};
}

const initialState: BillingAddressState = {
  loaded: false,
  loading: false,
  billingAddress: {}
};

export default function(state = initialState, action: Action): BillingAddressState {
  switch (action.type) {

    case CheckoutProgressActions.SUBMIT_BILLING_ADDRESS_SUCCESS: {
      const billingAddress = action.payload;
      return {
        loaded: true,
        loading: false,
        billingAddress: billingAddress
      }

    }

    default: {
      return state;
    }
  }
}