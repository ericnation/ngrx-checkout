import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@ngrx/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { CheckoutProgressActions } from '../../actions/checkout-progress.actions';

@Component({
  moduleId: module.id,
  selector: 'app-order-info',
  templateUrl: 'order-info.component.html',
  styleUrls: ['order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
  cart = {};
  constructor(
      public router: Router,
      private store: Store<AppState>,
      private checkoutProgressActions: CheckoutProgressActions
  ) {

  }

  ngOnInit() {
  }

  submitOrderInfoForm(form) {
    console.log(form.value);
    if(form.valid) {
      this.store.dispatch(this.checkoutProgressActions.submitOrderInfo(form.value));
      this.router.go('/shipping-info');
    }
  }

  backToShoppingCart() {
    alert('This link would take you back to shopping cart');
  }
}
