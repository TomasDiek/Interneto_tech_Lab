import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss']
})
export class ViewComponentComponent implements OnInit {
  public propertyId!:number;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
      this.propertyId=this.route.snapshot.params['id'];
  }

}
