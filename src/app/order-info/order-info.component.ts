import { Component, OnInit } from '@angular/core';
import {ControlGroup, FormBuilder, FORM_DIRECTIVES, Validators} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'app-order-info',
  templateUrl: 'order-info.component.html',
  styleUrls: ['order-info.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class OrderInfoComponent implements OnInit {
  orderInfoForm: ControlGroup;
  cart = {};
  constructor(fb: FormBuilder) {
    this.orderInfoForm = fb.group({
      email: ['', Validators.required],
      giftmessage: []
    });
  }

  ngOnInit() {
  }

  submitOrderInfoForm() {
    
  }
}
