import { Component, Input } from '@angular/core';
import { IPropertyBase } from 'src/app/interface/IPropertyBase';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent {
  @Input() property!:IPropertyBase;
  @Input() hideIcons!: boolean;
}
