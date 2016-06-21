import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'order-summary',
  templateUrl: 'order-summary.component.html',
  styleUrls: ['order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  couponCodeFormVisible = false;
  couponcodes = false;
  constructor() {}

  ngOnInit() {
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
