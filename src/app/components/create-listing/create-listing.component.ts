import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api'
import { IPropertyBase } from 'src/app/interface/IPropertyBase';


@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  propertyTypes:Array<string>=['House','Apartment','Duplex'];
  furnishTypes:Array<string>=['Fully','Semi','Unfurnished'];

  propertyView: IPropertyBase={
    id:0,
    sellRent:0,
    pType:'',
    fType:'',
    price:0,
    builtArea:0,
    city:'',
    rtm:0,
    adress:'',
  };




  constructor(private route:Router){}
  ngOnInit(): void {
    
  }
  // Form:NgForm
  onSubmit(){
    console.log('SellRent=' + this.addPropertyForm.value.basicInformation.sellRent);
    console.log(this.addPropertyForm)
  }

}
