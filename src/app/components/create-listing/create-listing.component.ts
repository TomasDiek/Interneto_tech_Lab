import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api'

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  propertyTypes:Array<string>=['House','Apartment','Duplex'];
  furnishTypes:Array<string>=['Fully','Semi','Unfurnished']


  stateOptions: any[] = [
    { label: 'Sell', value: 'sell' },
    { label: 'Rent', value: 'rent' }
];

  constructor(private route:Router){}
  ngOnInit(): void {
    
  }
  // Form:NgForm
  onSubmit(){
    console.log(this.stateOptions.values)
    console.log(this.addPropertyForm)
  }

}
