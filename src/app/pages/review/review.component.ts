import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { Router } from '@ngrx/router';
import { CheckoutProgressActions } from '../../actions/checkout-progress.actions';
import { CheckoutServices } from '../../services/services';
import { CheckoutActions } from '../../actions/checkout-actions';

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
  shippingAddress;
  //billingAddress;
  shippingMethod;

  constructor(
      private store: Store<AppState>,
      private router: Router,
      private checkoutProgressActions: CheckoutProgressActions,
      private checkoutActions: CheckoutActions,
      private cdr: ChangeDetectorRef
  ) {


    // Right now in RC4 there is a bug where subscribing to async data won't trigger a change detection to update the UI
    // So we have to manually do it ... should be fixed in RC5 though.
    setTimeout(() => {
      this.subscription = store.select('cart')
          .subscribe(cart => {
            this.cart = cart['cart'];
          });

      this.subscription = store.select('cartItems')
          .subscribe(cartItems => {
            this.items = cartItems['cartItems'];
          });

      this.subscription = store.select('shippingAddress')
          .subscribe(shippingAddress => {
            this.shippingAddress = shippingAddress['shippingAddress'];
          });

      // this.subscription = store.select('billingAddress')
      //     .subscribe(billingAddress => {
      //       this.billingAddress = billingAddress['billingAddress'];
      //     });

      this.subscription = store.select('shippingMethod')
          .subscribe(shippingMethod => {
            this.shippingMethod = shippingMethod['shippingMethod'];
          });

      this.cdr.detectChanges();
    }, 100);

  }

  ngOnInit() {

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
