/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PaymentMethodComponent } from './payment-method.component';

describe('Component: PaymentMethod', () => {
  it('should create an instance', () => {
    let component = new PaymentMethodComponent();
    expect(component).toBeTruthy();
  });
});
