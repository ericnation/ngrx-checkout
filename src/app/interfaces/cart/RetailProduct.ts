import { Product } from "./Product";
/**
 * RetailPackage includes product, manufacturer
 * and art data to support a ShoppingCart or Order
 */
export interface RetailPackage {
  /**
   * A list of manufacturers referenced by a ShoppingCart / Order
   */
  Products:Array<Product>;



}// end class RetailPackage
