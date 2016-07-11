export interface CheckoutSettings {

  /**
   * If set to false, "Arrange Payment Later" should be the payment type for this order, and we should skip the payment step
   * altogether.
   */
  PaymentEnabled: boolean;

  /**
   * Even if this is false, Billing Address is required if the user chooses to pay with a credit card.
   */
  BillingAddressRequired: boolean;

  /**
   * If this is false, we don't prompt at all for shipping address, and only save billing address.
   */
  ShippingAddressEnabled: boolean;

  /**
   * Stores can configure whether or not gift messages are allowed.
   */
  GiftMessageEnabled: boolean;

  /**
   * Name of the store to display
   */
  StoreName: string;

  /**
   * Logo URL, if there is one.
   */
  StoreLogoUrl: string;

  /**
   * Store e-mail address to show for help/questions
   */
  ContactEmail: string;

  /**
   * Store phone number to show for help/questions
   */
  PhoneNumber: string;
}
