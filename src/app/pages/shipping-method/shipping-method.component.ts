import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CheckoutServices } from "../../services/services";
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { AddDays } from "../../shared/pipes/add-days.pipe";
import { Router } from '@ngrx/router';
import { CheckoutProgressActions } from "../../actions/checkout-progress.actions";
import { Store } from "@ngrx/store";
import { AppState } from "../../reducers/index";

@Component({
  moduleId: module.id,
  selector: 'shipping-method',
  templateUrl: 'shipping-method.component.html',
  styleUrls: ['shipping-method.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES ],
  pipes: [AddDays]
})

export class ShippingMethodComponent implements OnInit, OnDestroy {
  currentDate = new Date();
  model;
  subscription;
  shippingMethods = [];
  selectedShippingMethod;

  constructor(
    private router: Router,
    private service: CheckoutServices,
    private store: Store<AppState>,
    private checkoutProgressActions: CheckoutProgressActions,
    private cdr: ChangeDetectorRef
  ) {
    this.model = {
      shippingmethod: ''
    };


    setTimeout(() => {
      this.subscription = this.store.select('shippingMethods')
          .subscribe(
              shippingMethods => {

                this.shippingMethods = shippingMethods['shippingMethods'];

              }
          );
      this.cdr.detectChanges();
    }, 100);



  }

  ngOnInit() {
  }

  submitShippingMethod() {
    this.store.dispatch(this.checkoutProgressActions.submitShippingMethod(this.selectedShippingMethod));
    this.router.go('/payment-info');
  }

  setShippingMethod(shippingMethod) {
    this.selectedShippingMethod = shippingMethod;
  }

  backToShippingInfo() {
    this.router.back();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
