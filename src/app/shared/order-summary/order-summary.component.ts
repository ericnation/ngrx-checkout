import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'order-summary',
  templateUrl: 'order-summary.component.html',
  styleUrls: ['order-summary.component.css']
})
export class OrderSummaryComponent implements AfterViewInit {
  couponCodeFormVisible = false;
  couponcodes = false;
  @Input() cart;

  constructor(

  ) {

  }

  ngAfterViewInit() {
    console.log('cart ' , this.cart);
  }

  showCouponForm() {
    this.couponCodeFormVisible = true;
  }

  applyCouponCode() {
    this.couponCodeFormVisible = false;
    this.couponcodes = true;
  }

  removeCouponCode(code) {}

}
