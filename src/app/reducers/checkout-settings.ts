import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CheckoutActions } from '../actions/checkout-actions';

export interface CheckoutSettingsState {
  loaded: boolean;
  loading: boolean;
  id: string;
  settings: {};
}

const initialState: CheckoutSettingsState = {
  loaded: false,
  loading: false,
  id: '',
  settings: {}
};

export default function(state = initialState, action: Action): CheckoutSettingsState {
  switch (action.type) {
    case CheckoutActions.LOAD_CHECKOUT_SETTINGS: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case CheckoutActions.LOAD_CHECKOUT_SETTINGS_SUCCESS: {
      const settings = action.payload[0].Data;
      return {
        loaded: true,
        loading: false,
        id: settings.ID,
        settings: settings
      }

    }

    default: {
      return state;
    }
  }
}