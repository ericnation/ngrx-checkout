import { RetailPackage } from "./RetailProduct";
import { ShoppingCart } from "./ShoppingCart";
/**
 * A ShoppingCart with supporting data
 */
export interface ShoppingCartPackage extends RetailPackage {
  /**
   * Represents a customer shopping cart
   */
  Cart:ShoppingCart;

  CartEmail:string;
}
