import { Routes } from '@ngrx/router';
import { OrderInfoComponent } from "./pages/order-info/order-info.component";
import { ShippingInfoComponent } from './pages/shipping-info/shipping-info.component';
import { ShippingMethodComponent } from './pages/shipping-method/shipping-method.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { ReviewComponent } from './pages/review/review.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

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
  },
  {
    path: '/shipping-method',
    component: ShippingMethodComponent
  },
  {
    path: '/payment-info',
    component: PaymentMethodComponent
  },
  {
    path: '/review',
    component: ReviewComponent
  },
  {
    path: '/confirmation',
    component: ConfirmationComponent
  }
];

export default routes;
