import { Action } from '@ngrx/store';
import { CheckoutProgressActions } from '../actions/checkout-progress.actions';

export type BillingAddressState = {

}

const initialState: BillingAddressState = {

};

export default function(state = initialState, action: Action): BillingAddressState {
  switch (action.type) {

    default: {
      return state;
    }
  }

}
