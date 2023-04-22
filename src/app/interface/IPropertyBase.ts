export interface IPropertyBase {
    id: number;
    address:string; 
    sellRent: number;
    propertyType: string;
    furnishingType: string;
    price: number;
    builtArea: number;
    city: string;
    readyToMove: boolean;
    photo?: string;
    estPossessionOn?: string;
}