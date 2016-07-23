export interface ShippingMethod {
  ID: number;
  VendorId: number;
  Name: string;
  Description: string;
  VendorName: string;
  Enabled: boolean;
  Price: number;
  AllowResidential: boolean;
  AllowPoBox: boolean;
  AllowCommerial: boolean;
  ProcessDays: number;
  PromptForCartShipperAccount: boolean;
  RequireCartShipperAccount: boolean;
  TransitDays_Min: number;
  TransitDays_Max: number;
}
