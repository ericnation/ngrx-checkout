import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()

/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */
export class CheckoutProgressActions {

  static SUBMIT_ORDER_INFO = 'Submit Order Info';
  submitOrderInfo(orderinfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_ORDER_INFO,
      payload: orderinfo
    }
  }

  static SUBMIT_ORDER_INFO_SUCCESS = 'Submit Order Info Success';
  submitOrderInfoSucess(orderinfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_ORDER_INFO_SUCCESS,
      payload: orderinfo
    }
  }

  static SUBMIT_ORDER_INFO_FAIL = 'Submit Order Info Fail';
  submitOrderInfoFail(orderinfo): Action {
    return {
      type: CheckoutProgressActions.SUBMIT_ORDER_INFO_FAIL,
      payload: orderinfo
    }
  }
}