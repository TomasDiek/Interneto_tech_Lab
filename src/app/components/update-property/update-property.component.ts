import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IKeyValuePair } from 'src/app/interface/ikey-value-pair';
import { Property } from 'src/app/interface/property';
import { PropertyService } from 'src/app/services/property.service';
import * as alertify from 'alertifyjs';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.scss']
})
export class UpdatePropertyComponent implements OnInit  {
  @ViewChild('formTabs') formTabs!: TabsetComponent;
  public propertyId!:number;
  updatePropertyForm!:FormGroup;
  property = new Property();
  nextClicked!: boolean;
  propertyTypes!:IKeyValuePair[];
  furnishTypes!:IKeyValuePair[];
  cityList!:any[];
  wantTo = [
    {
      id: 1,
      name: 'Sell'
    },
    {
      id: 2,
      name: 'Rent'
    }
  ];
  
  constructor(private datePipe: DatePipe,private fb: FormBuilder,private route:ActivatedRoute, private router:Router, private propertyService:PropertyService){}

  ngOnInit(): void {
    alertify.set('notifier','position', 'top-right');
    this.propertyService.getAllCities().subscribe(data=>{
      this.cityList=data;
    });
    this.propertyService.getPropertyTypes().subscribe(data => {
      this.propertyTypes = data;
      console.log(this.propertyTypes)
    });

    this.propertyService.getFurnishingTypes().subscribe(data => {
        this.furnishTypes = data;
    });
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.propertyService.getProperty(this.propertyId).subscribe(
          (data: Property) => {
            this.property = data;
            this.CreateUpdatePropertyForm();
          }, error=> this.router.navigate(['entry/buy'])
        );
      }
    );
  }

  // Form:NgForm
  CreateUpdatePropertyForm(){
    const propertyTypeId = this.propertyTypes.find(p => p.name === this.property.propertyType)?.id;
    const furnishingTypeId = this.furnishTypes.find(p => p.name === this.property.furnishingType)?.id;
    const cityId = this.cityList.find(p => p.name === this.property.city)?.id;
    this.updatePropertyForm=this.fb.group({
      BasicInformation: this.fb.group({
        SellRent:[null, Validators.required],
        PType:[propertyTypeId,Validators.required],
        FType:[furnishingTypeId,Validators.required],
      }),
      PricingInformation: this.fb.group({
        Price:[this.property.price,Validators.required],
        BuiltArea:[this.property.builtArea,Validators.required],
      }),
      AddressInformation:this.fb.group({
        Address:[this.property.address,Validators.required],      
        City:[cityId,Validators.required],
      }),
      OtherInformation:this.fb.group({
        TotalFloor: [this.property?.totalFloors],
        RTM: [this.property.readyToMove, Validators.required],
        PossessionOn: [this.property?.estPossessionOn, Validators.required],
        AOP: [this.property?.age],
        Description: [this.property?.description]
      })
    })
  }
  onSubmit(){
    this.nextClicked=true;
    console.log(this.property)
    // if(this.tabsValid()){
    //   this.mapProperty();
    //   this.propertyService.addProperty(this.property).subscribe(
    //     () =>{
    //       alertify.success("Congrats, your property has been successfully listed");
    //       // console.log(this.updatePropertyForm);
    //       if(this.SellRent.value==='2'){
    //         this.router.navigate(['entry/rent'])
    //       }
    //       else{
    //         this.router.navigate(['entry/buy']);
    //       }
    //     });
    // }
    // else{
    //   alertify.error("Please provide all the required fields");
    // }
    //console.log('SellRent='+this.updatePropertyForm.value.BasicInformation.SellRent);
    
  }
  // FormGroups
  get BasicInformation(){
    return this.updatePropertyForm.controls.BasicInformation as FormGroup;
  }
  get PricingInformation() {
    return this.updatePropertyForm.controls.PricingInformation as FormGroup;
  }

  get AddressInformation() {
    return this.updatePropertyForm.controls.AddressInformation as FormGroup;
  }

  get OtherInformation() {
    return this.updatePropertyForm.controls.OtherInformation as FormGroup;
  }
  // Basic
  get SellRent(): FormControl | null {
    return this.BasicInformation.get('SellRent') as FormControl;
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
  
  mapProperty(): void {
    this.property.id = this.property.id;
    // @ts-ignore: Object is possibly 'null'.
    this.property.sellRent = +this.SellRent.value;
    this.property.propertyTypeId = this.PType.value;
    this.property.CityId = this.City.value;
    this.property.furnishingTypeId = this.FType.value;
    this.property.price =+ this.Price.value;
    this.property.builtArea =+ this.BuiltArea.value;
    if(this.TotalFloor.value)
      this.property.totalFloors = this.TotalFloor.value;
    else
      this.property.totalFloors='1';
    this.property.address = this.Address.value;
    this.property.readyToMove = this.RTM.value;
     // @ts-ignore: Object is possibly 'null'.
    this.property.estPossessionOn = this.datePipe.transform(this.PossessionOn.value,'MM/dd/yyyy');
    if(this.Description.value)
      this.property.description = this.Description.value;
    else
      this.property.description="";
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
    this.nextClicked = true;
    if (IsCurrentTabValid) {
      this.formTabs.tabs[NextTabId].active = true;
    }
  }
}
