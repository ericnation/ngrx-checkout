import { ProductPersonalization } from "./ProductPersonalization";
import { ProductStyle } from "./ProductStyle";

export interface Product {
  ID:number;
  Manufacturer:string;
  ManufacturerSku:string;
  ManufacturerId:number;
  Sku:string;
  Name:string;
  LongDescription:string;
  DefaultStyleId:number;
  CanPrint:boolean;
  CanDigitalPrint:boolean;
  CanScreenPrint:boolean;
  CanEmbroider:boolean;
  TeamNameNumbersEnabled:boolean;
  HasBack:boolean;
  HasThirdSide:boolean;
  HasFourthSide:boolean;
  ThirdSideName:string;
  FourthSideName:string;
  IsStatic:boolean;
  Featured:boolean;
  PersonalizationType:string;
  AddToCartButtonText:string;
  Personalizations:Array<ProductPersonalization>;
  ProductStyles:Array<ProductStyle>;
}
