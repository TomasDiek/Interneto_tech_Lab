import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent {
  Property:any={
    "id":1,
    "adress":"Vileikos g.8",
    "type":"House",
    "price":120000
  }
}
