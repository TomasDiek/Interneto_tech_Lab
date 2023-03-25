import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  constructor(private route:Router){}
  ngOnInit(): void {
    
  }
  // Form:NgForm
  onSubmit(){
    console.log(this.addPropertyForm)
  }
}
