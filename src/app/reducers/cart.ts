import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';

import { CheckoutActions } from '../actions/checkout-actions';
import {Cart} from "../models/cart/Cart";


export interface CartState {
  loaded: boolean;
  loading: boolean;
  id: string;
}

const initialState: CartState = {
  loaded: false,
  loading: false,
  id: ''
};

export default function(state = initialState, action: Action): CartState {
  switch (action.type) {

    case CheckoutActions.LOAD_CART: {
      return Object.assign({}, state, {
        loading: true
      })
    }

    case CheckoutActions.LOAD_CART_SUCCESS: {
      const cart = action.payload;
      console.log('payload ' , action.payload);
      return {
        loaded: true,
        loading: false,
        id: cart.ID
      }
    }
    default: {
      return state;
    }
  }
}