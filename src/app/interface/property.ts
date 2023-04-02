import { IPropertyBase } from "./IPropertyBase";

export class Property implements IPropertyBase{
    id!:number;
    sellRent!:number;
    pType!:string;
    fType!:string;
    price!:number;
    builtArea!:number;
    city!:string;
    rtm!:number;
    address!:string;
    image?:string; 
    description!:string;
    totalFloor?:number;
    availableFrom?:string;
    age?:number;
    PostedOn!: string;
    PostedBy!: number;
}