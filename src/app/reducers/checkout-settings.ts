import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CheckoutActions } from '../actions/checkout-actions';

export interface CheckoutSettingsState {
  loaded: boolean;
  loading: boolean;
  id: string;
}

const initialState: CheckoutSettingsState = {
  loaded: false,
  loading: false,
  id: ''
};

export default function(state = initialState, action: Action): CheckoutSettingsState {
  switch (action.type) {
    case CheckoutActions.LOAD_CHECKOUT_SETTINGS_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}