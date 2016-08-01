import { Component, OnInit } from '@angular/core';
import {CheckoutServices} from "../../services/services";
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { AddDays } from "../../shared/pipes/add-days.pipe";
import { Router } from '@ngrx/router';

@Component({
  moduleId: module.id,
  selector: 'shipping-method',
  templateUrl: 'shipping-method.component.html',
  styleUrls: ['shipping-method.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES ],
  pipes: [AddDays]
})
export class ShippingMethodComponent implements OnInit {
  currentDate = new Date();
  model;
  shippingMethods;

  constructor(
      private router: Router,
      private service: CheckoutServices
  ) {
    this.model = {
      shippingmethod: ''
    }
  }

  ngOnInit() {
    this.service.getCheckoutMethods()
        .subscribe(
            response => {
              this.shippingMethods = response;
            },
            errors => {
              console.log('getShippingMethods ' + errors);
            }
        )
  }

  submitShippingMethod(form) {
    console.log(form);
  }

  backToShippingInfo() {
    this.router.back();
  }

}
