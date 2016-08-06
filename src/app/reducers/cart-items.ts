import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';

import { CheckoutActions } from '../actions/checkout-actions';


export interface CartItemsState {
  loaded: boolean;
  loading: boolean;
  cartItems: {};
}

const initialState: CartItemsState = {
  loaded: false,
  loading: false,
  cartItems: {}
};

export default function(state = initialState, action: Action): CartItemsState {
  switch (action.type) {

    case CheckoutActions.LOAD_CART_ITEMS: {
      return Object.assign({}, state, {
        loading: true
      })
    }

    case CheckoutActions.LOAD_CART_ITEMS_SUCCESS: {
      const cartItems = action.payload;
      return {
        loaded: true,
        loading: false,
        cartItems: cartItems
      }
    }
    
    default: {
      return state;
    }
  }
}