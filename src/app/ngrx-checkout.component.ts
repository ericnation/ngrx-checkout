import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HeaderComponent } from "./shared/header/header.component";
import { OrderSummaryComponent } from "./shared/order-summary/order-summary.component";
import { ProgressNavComponent } from "./shared/progress-nav/progress-nav.component";
import { OrderInfoComponent } from "./pages/order-info/order-info.component";
import { ShippingInfoComponent } from "./pages/shipping-info/shipping-info.component";
import { ngrxCheckoutService } from './ngrx-checkout.service';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { Store } from '@ngrx/store';
import { AppState} from './reducers/index';
import { CheckoutActions } from './actions/checkout-actions';

@Component({
  moduleId: module.id,
  selector: 'ngrx-checkout-app',
  templateUrl: 'ngrx-checkout.component.html',
  styleUrls: ['ngrx-checkout.component.css'],
  directives: [
    HeaderComponent,
    OrderSummaryComponent,
    ProgressNavComponent,
    OrderInfoComponent,
    ShippingInfoComponent,
    StoreLogMonitorComponent
  ],
  providers: [ngrxCheckoutService]
})

export class NgrxCheckoutAppComponent implements OnInit, OnDestroy {
  cart: Observable<any>;
  checkoutProgress;
  checkoutSettings: Observable<any>;
  private subscription;

  constructor(
      private store: Store<AppState>,
      private checkoutActions: CheckoutActions
  ) {
    this.cart = store.select('cart');
    this.checkoutSettings = store.select('checkout');

    // Because we're actually accessing checkoutProgress properties in this root component and not just
    // passing the data down to child components, we must manually subscribe to the store.
    this.subscription = this.store.select('checkoutProgress')
        .subscribe(checkoutProgress => {
          this.checkoutProgress = checkoutProgress;
        })
  }

  ngOnInit() {
    this.store.dispatch(this.checkoutActions.loadCart());
    this.store.dispatch(this.checkoutActions.loadCheckoutSettings());
    this.store.dispatch(this.checkoutActions.loadShippingMethods());
    this.store.dispatch(this.checkoutActions.loadCartItems());
  }


   // if you do not use async pipe and create manual subscriptions
   // always remember to unsubscribe in ngOnDestroy

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
