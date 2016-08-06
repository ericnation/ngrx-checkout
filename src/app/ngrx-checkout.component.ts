import { Component, OnInit } from '@angular/core';
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

export class NgrxCheckoutAppComponent implements OnInit {
  cart: Observable<any>;
  checkoutProgress: Observable<any>;
  checkoutSettings: Observable<any>;

  constructor(
      private store: Store<AppState>,
      private checkoutActions: CheckoutActions
  ) {
    this.cart = store.select('cart');
    this.checkoutProgress = store.select('checkoutProgress');
    this.checkoutSettings = store.select('checkout');
  }

  ngOnInit() {
    this.store.dispatch(this.checkoutActions.loadCart());
    this.store.dispatch(this.checkoutActions.loadCheckoutSettings());
    this.store.dispatch(this.checkoutActions.loadShippingMethods());
  }

}
