import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { Router } from '@ngrx/router';
import { CheckoutProgressActions } from '../../actions/checkout-progress.actions';

@Component({
  moduleId: module.id,
  selector: 'app-payment-method',
  templateUrl: 'payment-method.component.html',
  styleUrls: ['payment-method.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class PaymentMethodComponent implements OnInit {
  card = {

  };
  months = [
    { id: 1, month: '01 - January' },
    { id: 2, month: '02 - February' },
    { id: 3, month: '03 - March' },
    { id: 4, month: '04 - April' },
    { id: 5, month: '05 - May' },
    { id: 6, month: '06 - June' },
    { id: 7, month: '07 - July' },
    { id: 8, month: '08 - August' },
    { id: 9, month: '09 - September' },
    { id: 10, month: '10 - October' },
    { id: 11, month: '11 - November' },
    { id: 12, month: '12 - December' }
  ];

  expyears = [
    { year: '2016' },
    { year: '2017' },
    { year: '2018' },
    { year: '2019' },
    { year: '2020' },
    { year: '2021' }
  ];

  constructor(
      private store: Store<AppState>,
      private router: Router,
      private checkoutProgressActions: CheckoutProgressActions
  ) {

  }

  ngOnInit() {

  }

  backToShippingMethod() {
    this.router.back();
  }

  submitPayment(form) {
    if (form.valid) {
      this.store.dispatch(this.checkoutProgressActions.submitPayment(form.value));
      this.router.go('/review');
    }

  }

}
