import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'order-summary',
  templateUrl: 'order-summary.component.html',
  styleUrls: ['order-summary.component.css']
})
export class OrderSummaryComponent {
  @Input() cart;

  constructor() {

  }

  navigateBackToCart() {
    alert('this button would direct you back to your cart');
  }

}
