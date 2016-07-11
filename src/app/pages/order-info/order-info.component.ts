import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@ngrx/router";

@Component({
  moduleId: module.id,
  selector: 'app-order-info',
  templateUrl: 'order-info.component.html',
  styleUrls: ['order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
  cart = {};
  constructor(public router: Router) {

  }

  ngOnInit() {
  }

  submitOrderInfoForm(form) {
    console.log(form);
    if(form.valid) {
      this.router.go('/shipping-info');
    }
  }

  backToShoppingCart() {
    alert('This link would take you back to shopping cart');
  }
}
