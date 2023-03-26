import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api'
import { IProperty } from 'src/app/interface/property';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  propertyTypes:Array<string>=['House','Apartment','Duplex'];
  furnishTypes:Array<string>=['Fully','Semi','Unfurnished'];

  propertyView: IProperty={
    id:0,
    sellRent:0,
    adress:'',
    type:'',
    price:0,
   
  };




  constructor(private route:Router){}
  ngOnInit(): void {
    
  }
  // Form:NgForm
  onSubmit(){
    console.log(this.addPropertyForm)
  }

}
