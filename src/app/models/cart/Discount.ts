export interface Discount {
  ID: number;
  CouponCode: string;
  Description: string;
  DiscountCode: string;
  ExcludeDesigns: string;
  ExcludeProducts: string;
  ExcludeProductStyles: string;
  ExcludeShippingMethods: string;
  ExcludeStores: string;
  Name: string;
  OnlyDesigns: string;
  OnlyProducts: string;
  OnlyProductStyles: string;
  OnlyStores: string;
  DiscountItems: boolean;
  DiscountItemTax: boolean;
  DiscountShipping: boolean;
  DiscountShippingTax: boolean;
  RequiresCoupon: boolean;
  DiscountAmount: number;
  DiscountPercent: number;
  MinItemTotal: number;
  MinItemCount: number;
  EffectiveDate: Date;
  ExpirationDate: Date;
}
