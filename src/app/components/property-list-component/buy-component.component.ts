import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/interface/IPropertyBase';
import { PropertyService } from 'src/app/services/property.service';


@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.scss']
})
export class BuyComponentComponent implements OnInit {
  sellRent=1;
  properties!:Array<IPropertyBase>;
  constructor(private route:ActivatedRoute,private propertyService:PropertyService){}

  ngOnInit():void{
    if (this.route.snapshot.url.toString()=='rent'){
      this.sellRent=2;
    }
    this,this.propertyService.getProperties(this.sellRent).subscribe(
      data=>{
        this.properties=data;
        const newProperty=JSON.parse(localStorage.getItem('newProp')||'{}');
        if(newProperty.sellRent==this.sellRent){
          this.properties=[newProperty,...this.properties]
        }
      }, error=>{
        console.log(error);
      }
    )
  }

}
