import { ProductStyleSize } from "./ProductStyleSize";
export interface ProductStyle {
    ID: number;
    IsDefault: boolean;
    Name: string;
    HtmlColor1: string;
    HtmlColor2: string;
    CanPrint: boolean;
    CanDigitalPrint: boolean;
    CanScreenPrint: boolean;
    CanEmbroider: boolean;
    UnitPrice: number;
    Price_Canvas: number;
    Price_Name: number;
    Price_Number: number;
    ImageWidth_Front: number;
    ImageWidth_Back: number;
    ImageHeight_Front: number;
    ImageHeight_Back: number;
    ImageFilePath_Front: string;
    ImageFilePath_Back: string;
    ImageFilePath_SleeveLeft: string;
    ImageFilePath_SleeveRight: string;
    Sizes: Array<ProductStyleSize>;
}
