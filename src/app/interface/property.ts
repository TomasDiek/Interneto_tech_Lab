import { IPropertyBase } from "./IPropertyBase";
import { Photo } from "./photo";

export class Property implements IPropertyBase{
    id!: number;
    sellRent!: number;
    propertyTypeId!: number;
    propertyType!: string;
    furnishingTypeId!: number;
    furnishingType!: string;
    price!: number;
    builtArea!: number;
    address!: string;
    CityId!: number;
    city!: string;
    totalFloors?: string;
    readyToMove!:boolean;
    age?: string;
    estPossessionOn?: string;
    photo?: string;
    description?: string;
    photos?: Photo[];
}