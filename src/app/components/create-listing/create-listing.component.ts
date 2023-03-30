import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api'
import { IPropertyBase } from 'src/app/interface/IPropertyBase';


@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
  propertyTypes:Array<string>=['House','Apartment','Duplex'];
  furnishTypes:Array<string>=['Fully','Semi','Unfurnished'];
  addPropertyForm!:FormGroup;
  
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

  constructor(private fb: FormBuilder, private route:Router){}
  ngOnInit(): void {
    this.CreateAddPropertyForm();
  }
  // Form:NgForm
  CreateAddPropertyForm(){
    this.addPropertyForm=this.fb.group({
      BasicInformation: this.fb.group({
        sellRent:[null,Validators.required],
        pType:[null,Validators.required],
        fType:[null,Validators.required],
      }),
      Pricing: this.fb.group({
        price:[null,Validators.required],
        builtArea:[null,Validators.required],
      }),
      Adress:this.fb.group({
        adress:[null,Validators.required],      
        city:[null,Validators.required],
      }),
      Other:this.fb.group({
        TotalFloor: [null],
        RTM: [null, Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Description: [null]
      })
     
      // builtArea:[null,Validators.required],
    })
  }
  onSubmit(){
    console.log('SellRent='+this.addPropertyForm.value.BasicInformation.SellRent);
    console.log(this.addPropertyForm)
  }
  get BasicInformation(){
    return this.addPropertyForm.controls.BasicInformation as FormGroup;
  }

}
