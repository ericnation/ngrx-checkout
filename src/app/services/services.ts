import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CheckoutSettings } from '../models/checkout-settings';
import { Cart } from '../models/cart/Cart';

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()

export class CheckoutServices {

  constructor(private http: Http) {

  }

  getStates(): Observable<any> {
    return this.http.get('http://services.groupkt.com/state/get/USA/all')
        .map(res => res.json());
  }

  getCheckoutSettings(): Observable<CheckoutSettings> {
    return this.http.get('http://localhost:3000/api/CheckoutSettings/')
        .map(res => res.json());
  }

  getCart(): Observable<Cart> {
    return this.http.get('http://localhost:3000/api/Cart/')
        .map(res => res.json());
  }

  saveOrderInfo(orderInfo): Observable<any> {
    return this.http.patch('http://localhost:3000/api/Cart/', JSON.stringify(orderInfo), HEADER)
        .map(res => res.json());
  }
}