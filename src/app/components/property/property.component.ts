import { Component, Input } from '@angular/core';
import { IProperty } from 'src/app/interface/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent {
  @Input() property!:IProperty;

}
