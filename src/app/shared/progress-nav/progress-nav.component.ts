import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@ngrx/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { CheckoutProgressActions } from '../../actions/checkout-progress.actions';

@Component({
  moduleId: module.id,
  selector: 'progress-nav',
  templateUrl: 'progress-nav.component.html',
  styleUrls: ['progress-nav.component.css']
})
export class ProgressNavComponent implements OnInit {
  @Input() checkoutProgress;
  constructor(
      private router: Router,
      private store: Store<AppState>,
      private checkoutProgressActions: CheckoutProgressActions
  ) {

  }

  ngOnInit() {
  }

  goToOrderInfo() {
    if (this.checkoutProgress.orderInfoComplete) {
      this.store.dispatch(this.checkoutProgressActions.navigateToOrderInfo());
      this.router.go('/order-info');

    }
  }

  goToShipping() {
    if (this.checkoutProgress.shippingComplete) {
      this.store.dispatch(this.checkoutProgressActions.navigateToShipping());
      this.router.go('/shipping-info')
    }
  }

  goToBilling() {
    if (this.checkoutProgress.billingComplete) {
      this.store.dispatch(this.checkoutProgressActions.navigateToPayment());
      this.router.go('/payment-info')
    }
  }

  goToReviewAndPay () {
    if (this.checkoutProgress.reviewAndPayComplete) {
      this.store.dispatch(this.checkoutProgressActions.navigateToReview());
      this.router.go('/confirmation');
    }
  }
}
