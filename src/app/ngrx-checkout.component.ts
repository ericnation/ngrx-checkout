import { Component } from '@angular/core';
import {HeaderComponent} from "./shared/header/header.component";
import {OrderSummaryComponent} from "./shared/order-summary/order-summary.component";
import {ProgressNavComponent} from "./shared/progress-nav/progress-nav.component";

@Component({
  moduleId: module.id,
  selector: 'ngrx-checkout-app',
  templateUrl: 'ngrx-checkout.component.html',
  styleUrls: ['ngrx-checkout.component.css'],
  directives: [
    HeaderComponent,
    OrderSummaryComponent,
    ProgressNavComponent
  ]
})
export class NgrxCheckoutAppComponent {
  title = 'ngrx-checkout works!';
}
