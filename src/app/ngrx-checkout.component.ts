import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/header/header.component";
import { OrderSummaryComponent } from "./shared/order-summary/order-summary.component";
import { ProgressNavComponent } from "./shared/progress-nav/progress-nav.component";
import { OrderInfoComponent } from "./order-info/order-info.component";
import { ShippingInfoComponent } from "./shipping-info/shipping-info.component";

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
    ShippingInfoComponent
  ]
})

export class NgrxCheckoutAppComponent {
  title = 'ngrx-checkout works!';

}
