import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { IPropertyBase } from '../interface/IPropertyBase';
import { Property } from '../interface/property';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient) {}
  getAllCities():Observable<string[]>{
    return this.http.get<string[]>('https://localhost:7272/api/CityControler');
  }
  getProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get('../../../assets/data/small.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<Property> = [];
        // @ts-ignore: Object is possibly 'null'.
        const localProperties= JSON.parse(localStorage.getItem('newProp'));
        if(localProperties){
          for (const id in localProperties) {
            if(SellRent){
              if (localProperties.hasOwnProperty(id) && localProperties[id].sellRent === SellRent) {
                propertiesArray.push(localProperties[id]);
              }
            }
            else{
              propertiesArray.push(localProperties[id]);
            }
          }
        }
        for (const id in data) {
          if(SellRent){
            if (data.hasOwnProperty(id) && data[id].sellRent === SellRent) {
              propertiesArray.push(data[id]);
            }
          }
          else{
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
    return this.http.get<Property[]>('../assets/data/small.json');
  }
  getProperty(id: number) {
    return this.getProperties().pipe(
      map(propertiesArray => {
        // throw new Error("ok")
        return propertiesArray.find(p => p.propertyId === id);
      })
    );
  }
  addProperty(property:Property){
    let newProp=[property];
    if(localStorage.getItem('newProp')){
      newProp=[property,...JSON.parse(localStorage.getItem('newProp')||'{}')];
    }
    localStorage.setItem('newProp',JSON.stringify(newProp))
  }
  newPropId(){
    if(localStorage.getItem('propertyId')){
       // @ts-ignore: Object is possibly 'null'.
      localStorage.setItem('propertyId',String(+localStorage.getItem('propertyId')+1));
      return localStorage.getItem('propertyId')
    }
    else{
      localStorage.setItem('propertyId','101');
      return 101;
    }
  }
}
