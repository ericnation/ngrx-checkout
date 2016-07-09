import { Routes } from '@ngrx/router';
import { OrderInfoComponent } from "./order-info/order-info.component";
import { ShippingInfoComponent } from "./shipping-info/shipping-info.component";

const routes: Routes = [
  {
    path: '/',
    component: OrderInfoComponent,
    redirectTo: '/order-info'
  },
  {
    path: '/order-info',
    component: OrderInfoComponent
  },
  {
    path: '/shipping-info',
    component: ShippingInfoComponent
  }
];

export default routes;
