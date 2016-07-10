import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@ngrx/router';

@Component({
  moduleId: module.id,
  selector: 'app-shipping-info',
  templateUrl: 'shipping-info.component.html',
  styleUrls: ['shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {

  addressFormValid = true;
  address = {

  };

  countries = [
    { id: 1, country: 'United States' },
    { id: 2, country: 'Canada' },
    { id: 3, country: 'Mexico' }
  ];

  states = [
    { id: 1, state: 'Arizona' },
    { id: 2, state: 'California' },
    { id: 3, state: 'Colorado' }
  ];

  constructor(private router: Router) {


  }

  ngOnInit() {
  }

  saveAddress(form) {
    console.log(form);
  }

  backToOrderInfo() {
    this.router.go('/order-info');
  }

}
