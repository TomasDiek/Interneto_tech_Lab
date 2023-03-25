import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
  constructor(private route:Router){}
ngOnInit(): void {
    
}
onBack(){
  this.route.navigate(['entry/home']);
}
}
