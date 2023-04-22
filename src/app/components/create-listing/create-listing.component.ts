import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api'
import { IPropertyBase } from 'src/app/interface/IPropertyBase';
import { Property } from 'src/app/interface/property';
import { PropertyService } from 'src/app/services/property.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
  @ViewChild('formTabs') formTabs!: TabsetComponent;
  propertyTypes:Array<string>=['House','Apartment','Duplex'];
  furnishTypes:Array<string>=['Fully','Semi','Unfurnished'];
  addPropertyForm!:FormGroup;
  nextClicked!: boolean;
  property = new Property();
  propertyView: IPropertyBase={
    id:null as any,
    sellRent:null as any,
    propertyType:'',
    furnishingType:'',
    price:null as any,
    builtArea:null as any,
    city:'',
    readyToMove:null as any,
    address:'',
  };
  cityList!:any[];

  constructor(private fb: FormBuilder, private router:Router,private propertyService:PropertyService){}
  ngOnInit(): void {
    alertify.set('notifier','position', 'top-right');
    this.CreateAddPropertyForm();
    this.propertyService.getAllCities().subscribe(data=>{
      this.cityList=data;
      console.log(data)
    })
  }
  // Form:NgForm
  CreateAddPropertyForm(){
    this.addPropertyForm=this.fb.group({
      BasicInformation: this.fb.group({
        SellRent:['1',Validators.required],
        PType:[null,Validators.required],
        FType:[null,Validators.required],
      }),
      PricingInformation: this.fb.group({
        Price:[null,Validators.required],
        BuiltArea:[null,Validators.required],
      }),
      AddressInformation:this.fb.group({
        Address:[null,Validators.required],      
        City:[null,Validators.required],
      }),
      OtherInformation:this.fb.group({
        TotalFloor: [null],
        RTM: [null, Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Description: [null]
      })
    })
  }
  onSubmit(){
    this.nextClicked=true;
    if(this.tabsValid()){
      this.mapProperty();
      this.propertyService.addProperty(this.property);
      alertify.success("Congrats, your property has been successfully listed");
      // console.log(this.addPropertyForm);
      if(this.SellRent.value==='2'){
        this.router.navigate(['entry/rent'])
      }
      else{
        this.router.navigate(['entry/buy']);
      }
    }
    else{
      alertify.error("Please provide all the required fields");
    }
    console.log('SellRent='+this.addPropertyForm.value.BasicInformation.SellRent);
    
  }
  // FormGroups
  get BasicInformation(){
    return this.addPropertyForm.controls.BasicInformation as FormGroup;
  }
  get PricingInformation() {
    return this.addPropertyForm.controls.PricingInformation as FormGroup;
  }

  get AddressInformation() {
    return this.addPropertyForm.controls.AddressInformation as FormGroup;
  }

  get OtherInformation() {
    return this.addPropertyForm.controls.OtherInformation as FormGroup;
  }
  // Basic
  get SellRent(){
    return this.BasicInformation.controls.SellRent as FormControl;
  }

  get PType() {
    return this.BasicInformation.controls.PType as FormControl;
  }

  get FType() {
    return this.BasicInformation.controls.FType as FormControl;
  }
  // Pricing
  get Price() {
    return this.PricingInformation.controls.Price as FormControl;
  }

  get BuiltArea() {
    return this.PricingInformation.controls.BuiltArea as FormControl;
  }
  // Address
  get Address() {
    return this.AddressInformation.controls.Address as FormControl;
  }
  get City() {
    return this.AddressInformation.controls.City as FormControl;
  }
  // Other
  get TotalFloor() {
    return this.OtherInformation.controls.TotalFloor as FormControl;
  }
  get RTM() {
    return this.OtherInformation.controls.RTM as FormControl;
  }
  get PossessionOn() {
    return this.OtherInformation.controls.PossessionOn as FormControl;
  }
  get AOP() {
    return this.OtherInformation.controls.AOP as FormControl;
  }

  get Description() {
    return this.OtherInformation.controls.Description as FormControl;
  }
  mapProperty():void{
    // @ts-ignore: Object is possibly 'null'.
    this.property.propertyId=this.propertyService.newPropId();
    this.property.sellRent = +this.SellRent.value;
    this.property.propertyType = this.PType.value;
    this.property.city = this.City.value;
    this.property.furnishingType = this.FType.value;
    this.property.price = this.Price.value;
    this.property.builtArea = this.BuiltArea.value;
    this.property.totalFloors = this.TotalFloor.value;
    this.property.address = this.Address.value;
    this.property.readyToMove = this.RTM.value;
    this.property.age = this.AOP.value;
    this.property.estPossessionOn = this.PossessionOn.value;
    this.property.description = this.Description.value;
    //this.property.post = new Date().toString();
  }
  tabsValid():boolean{
    if(this.BasicInformation.invalid){
      this.formTabs.tabs[0].active=true;
      return false;
    }
    if(this.PricingInformation.invalid){
      this.formTabs.tabs[1].active=true;
      return false;
    }
    if(this.AddressInformation.invalid){
      this.formTabs.tabs[2].active=true;
      return false;
    }
    if(this.OtherInformation.invalid){
      this.formTabs.tabs[3].active=true;
      return false;
    }
    return true;
  }
  selectTab(NextTabId: number, IsCurrentTabValid: boolean) {
    console.log(IsCurrentTabValid)
    this.nextClicked = true;
    if (IsCurrentTabValid) {
      this.formTabs.tabs[NextTabId].active = true;
    }
  }
}
