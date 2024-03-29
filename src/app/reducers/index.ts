import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeLogger is a powerful metareducer that logs out each time we dispatch
 * an action.
 *
 * A metareducer wraps a reducer function and returns a new reducer function
 * with superpowers. They are handy for all sorts of tasks, including
 * logging, undo/redo, and more.
 */
import { storeLogger } from 'ngrx-store-logger';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import checkoutProgressReducer, * as fromCheckoutProgress from './checkout-progress';
import checkoutSettingsReducer, * as fromCheckoutSettings from './checkout-settings';
import cartReducer, * as fromCart from './cart';
import shippingMethodsReducer, * as fromShippingMethods from './shipping-methods';
import shippingMethodReducer, * as fromShippingMethod from './shipping-method';
import cartItemsReducer, * as fromCartItems from './cart-items';
import shippingAddressReducer, * as fromShippingAddress from './shipping-address';
import billingAddressReducer, * as fromBillingAddress from './billing-address';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */

export interface AppState {
  checkoutProgress: fromCheckoutProgress.CheckoutProgressState;
  checkoutSettings: fromCheckoutSettings.CheckoutSettingsState;
  cart: fromCart.CartState;
  shippingMethods: fromShippingMethods.ShippingMethodsState,
  shippingMethod: fromShippingMethod.ShippingMethodState,
  cartItems: fromCartItems.CartItemsState,
  shippingAddress: fromShippingAddress.ShippingAddressState,
  billingAddress: fromBillingAddress.BillingAddressState
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */

export default compose(storeLogger(), combineReducers)({
  checkoutProgress: checkoutProgressReducer,
  checkout: checkoutSettingsReducer,
  cart: cartReducer,
  shippingMethods: shippingMethodsReducer,
  shippingMethod: shippingMethodReducer,
  cartItems: cartItemsReducer,
  shippingAddress: shippingAddressReducer,
  billingAddress: billingAddressReducer
})