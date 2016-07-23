import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CheckoutSettings } from '../models/checkout-settings';
import { Cart } from '../models/cart/Cart';

@Injectable()

export class CheckoutServices {

  constructor(private http: Http) {

  }

  private Header = { headers: new Headers({ 'Content-Type': 'application/json' }) };

  getCheckoutSettings(): Observable<CheckoutSettings> {
    return this.http.get('/api/CheckoutSettings/')
        .map(res => res.json().Data);
  }

  getCart(): Observable<Cart> {
    return this.http.get('/api/Cart')
        .map(res => res.json().Data);
  }
}