import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../interface/property';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient) {}

  getProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get('../../../assets/data/small.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<IProperty> = [];

        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].sellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
      })
    );
  }
}
