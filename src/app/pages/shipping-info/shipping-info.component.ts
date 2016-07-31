import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@ngrx/router';
import { AppState } from '../../reducers/index'
import { Store } from '@ngrx/store';
import { CheckoutProgressActions } from '../../actions/checkout-progress.actions';
import { CheckoutServices } from '../../services/services';

@Component({
  moduleId: module.id,
  selector: 'app-shipping-info',
  templateUrl: 'shipping-info.component.html',
  styleUrls: ['shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {

  addressFormValid = true;
  address = {

  };
  states;

  constructor(
      private router: Router,
      private store: Store<AppState>,
      private checkoutProgressActions: CheckoutProgressActions,
      private service: CheckoutServices
  ) {

  }

  ngOnInit() {

    this.service.getStates()
        .subscribe(
            response => {
              this.states = response.RestResponse.result;
              console.log(response);
            },
            error => {
              console.log('getStates error ' + error);
            }
        );
  }

  saveAddress(form) {
    if (form.valid) {
      this.router.go('/shipping-method');
    }
  }

  backToOrderInfo() {
    this.router.go('/order-info');
  }

}
