import { ShoppingCartItemAddOn } from "./ShoppingCartItemAddOn";
import { ShoppingCartItemPreview } from "./ShoppingCartItemPreview";
export interface ShoppingCartItem {
  ProductId: number;
  Quantity: number;
  ProductStyleId: number;
  ProductSizeId: number;
  ArtId: number;
  DesignId: number;
  CartRetailItemId: number;
  CartRetailItemSizeId: number;
  UnitPrice: number;
  FullName: string;
  PrintSetupCost: number;
  PrintSetupCharge: number;
  PersonalizationValues: any;
  NameNumberValues: any;
  AddOns: Array<ShoppingCartItemAddOn>;
  SidePreviews: Array<ShoppingCartItemPreview>;
}
