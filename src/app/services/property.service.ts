import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }
  getProperties(){
   return this.http.get('../../../assets/data/small.json')
  }
}
