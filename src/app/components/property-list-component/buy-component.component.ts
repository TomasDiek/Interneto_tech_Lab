import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/interface/property';
import { PropertyService } from 'src/app/services/property.service';


@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.scss']
})
export class BuyComponentComponent implements OnInit {
  sellRent=1;
  properties!:Array<IProperty>;
  constructor(private route:ActivatedRoute,private propertyService:PropertyService){}

  ngOnInit():void{
    if (this.route.snapshot.url.toString()=='rent'){
      this.sellRent=2;
    }
    this,this.propertyService.getProperties(this.sellRent).subscribe(
      data=>{
        this.properties=data;
      }, error=>{
        console.log(error);
      }
    )
  }

}
