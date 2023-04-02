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

  getProperties(SellRent: number): Observable<IPropertyBase[]> {
    return this.http.get('../../../assets/data/small.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<IPropertyBase> = [];

        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].sellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
      })
    );
  }
  addProperty(property:Property){
    localStorage.setItem('newProp',JSON.stringify(property))

  }
}
