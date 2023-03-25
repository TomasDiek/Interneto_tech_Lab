import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss']
})
export class ViewComponentComponent implements OnInit {
  public propertyId!:number;
  constructor(private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
      this.propertyId=Number(this.route.snapshot.params['id']);
      this.route.params.subscribe(
        (params)=>{
          this.propertyId=+params['id'];
        }
      );
  }
  onSelectNext(){
    // add max
    this.propertyId +=1;
    this.router.navigate(['entry/detailView/'+this.propertyId]);
  }
}
