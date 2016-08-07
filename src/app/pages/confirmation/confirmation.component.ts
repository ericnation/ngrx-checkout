import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';

@Component({
  moduleId: module.id,
  selector: 'confirmation',
  templateUrl: 'confirmation.component.html',
  styleUrls: ['confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  cart;
  checkoutSettings;
  subscription;

  constructor(
      private store: Store<AppState>,
      private cdr: ChangeDetectorRef
  ) {

    setTimeout(() => {
      this.subscription = this.store.select('cart')
          .subscribe(cart => {
            this.cart = cart['cart'];
          });

      this.subscription = this.store.select('checkout')
          .subscribe(checkoutSettings => {
            this.checkoutSettings = checkoutSettings['settings'];
          });

      this.cdr.detectChanges();
    }, 100);

  }

  ngOnInit() {
  }

  goBackToStore() {
    alert('This button would take you back to the store');
  }

}
