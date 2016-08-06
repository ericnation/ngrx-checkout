import { Injectable, EventEmitter } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CheckoutSettings } from '../models/checkout-settings';
import { Cart } from '../models/cart/Cart';
import { OrderInfo } from '../models/order-info';
import { ShippingInfo } from '../models/shipping-info';
import { ShippingMethod } from '../models/cart/ShippingMethod';
import { PaymentInfo } from '../models/payment-info';

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()

export class CheckoutServices {

  public triggerData = new EventEmitter();

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

  getCartItems(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Items/')
        .map(res => res.json());
  }

  saveOrderInfo(orderInfo): Observable<OrderInfo> {
    return this.http.patch('http://localhost:3000/api/Cart/', JSON.stringify(orderInfo), HEADER)
        .map(res => res.json());
  }

  saveShippingInfo(shippingInfo): Observable<ShippingInfo> {
    this.triggerData.emit({ value: shippingInfo });
    return this.http.patch('http://localhost:3000/api/ShippingAddress', JSON.stringify(shippingInfo), HEADER)
        .map(res => res.json());
  }

  saveShippingMethod(shippingMethod): Observable<ShippingMethod> {
    return this.http.patch('http://localhost:3000/api/ShippingMethod/', JSON.stringify(shippingMethod), HEADER)
        .map(res => res.json());
  }

  savePaymentInfo(paymentInfo): Observable<PaymentInfo> {
    return this.http.patch('http://localhost:3000/api/PaymentInfo/', JSON.stringify(paymentInfo), HEADER)
        .map(res => res.json());
  }

  savePlaceOrder(cart): Observable<Cart> {
    return this.http.patch('http://localhost:3000/api/Cart/', JSON.stringify(cart), HEADER)
        .map(res => res.json());
  }

  getShippingMethods(): Observable<any> {
    return this.http.get('http://localhost:3000/api/ShippingMethods')
        .map(res => res.json());
  }
}