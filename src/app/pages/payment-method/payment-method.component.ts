import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { Router } from '@ngrx/router';
import { CheckoutProgressActions } from '../../actions/checkout-progress.actions';
import { CheckoutServices } from '../../services/services';

@Component({
  moduleId: module.id,
  selector: 'app-payment-method',
  templateUrl: 'payment-method.component.html',
  styleUrls: ['payment-method.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class PaymentMethodComponent implements OnInit {
  address = {};
  card = {};
  expyears = [
    { year: '2016' },
    { year: '2017' },
    { year: '2018' },
    { year: '2019' },
    { year: '2020' },
    { year: '2021' }
  ];
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
  shippingAddress;
  subscription;
  states;
  sameAsShippingAddress = {
    selected: true
  };

  constructor(
      private store: Store<AppState>,
      private router: Router,
      private checkoutProgressActions: CheckoutProgressActions,
      private service: CheckoutServices,
      private cdr: ChangeDetectorRef
  ) {

    setTimeout(() => {
      this.subscription = store.select('shippingAddress')
          .subscribe(shippingAddress => {
            this.shippingAddress = shippingAddress['shippingAddress'];
          });

      this.cdr.detectChanges();

    }, 100);

  }

  ngOnInit() {
    this.service.getStates()
        .subscribe(
            response => {
              this.states = response.RestResponse.result;
            },
            error => {
              console.log('getStates error ' + error);
            }
        );
  }

  backToShippingMethod() {
    this.router.back();
  }

  saveBillingAddress(billingAddressForm) {
    this.store.dispatch(this.checkoutProgressActions.saveBillingAddress(billingAddressForm.value));
  }

  submitPayment(cardForm) {

    if (cardForm.valid) {
      this.store.dispatch(this.checkoutProgressActions.submitPayment(cardForm.value));

      if (cardForm.value.sameAsShippingAddress) {
        this.store.dispatch(this.checkoutProgressActions.saveBillingAddress(this.shippingAddress));
      } else {
        document.getElementById('saveBillingAddressBtn').click();
      }

      this.router.go('/review');
    }

  }


}
