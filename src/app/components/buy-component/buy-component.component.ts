import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';


@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.scss']
})
export class BuyComponentComponent implements OnInit {
  properties:any;
  constructor(private propertyService:PropertyService){}
  ngOnInit():void{
    this,this.propertyService.getProperties().subscribe(
      data=>{
        this.properties=data;
      }, error=>{
        console.log(error);
      }
    )
  }

}
