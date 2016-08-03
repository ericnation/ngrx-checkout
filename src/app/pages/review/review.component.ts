import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { Router } from '@ngrx/router';
import { CheckoutProgressActions } from '../../actions/checkout-progress.actions';
import { Observable } from 'rxjs/Observable';
import { CheckoutServices } from '../../services/services';

@Component({
  moduleId: module.id,
  selector: 'review',
  templateUrl: 'review.component.html',
  styleUrls: ['review.component.css']
})
export class ReviewComponent implements OnInit, OnDestroy {
  cart;
  private subscription;
  items;
  shippingInfo;

  constructor(
      private store: Store<AppState>,
      private router: Router,
      private checkoutProgressActions: CheckoutProgressActions,
      private service: CheckoutServices
  ) {
    this.subscription = store.select('cart')
        .subscribe(cart => {
          this.cart = cart;
        });

    this.service.triggerData
        .subscribe(
            value => {
              console.log('shipping info ' , value);
              this.shippingInfo = value;
            },
            errors => {
              console.log('triggerData failed ' + errors);
            }

        );
  }

  ngOnInit() {

    this.service.getCartItems()
        .subscribe(
            response => {
              this.items = response;
            },
            errors => {
              console.log('getCartItems ' , errors);
            }

        )
  }

  backToOrderInfo() {
    this.router.go('/order-info');
  }

  backToShippingInfo() {
    this.router.go('/shipping-info');
  }

  backToPaymentInfo() {
    this.router.go('/payment-info');
  }

  goBackToCart() {
    alert('This link would take you back to your cart');
  }

  placeOrder() {

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
