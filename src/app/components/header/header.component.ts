import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];

  activeItem!: MenuItem;

  ngOnInit(): void {
      // this.items=[
      //   { label: 'Home', routerLink:['home'] },
      //   { label: 'Buy',routerLink:['buy'] },
      //   { label: 'Rent',routerLink:['rent'] },
      //   { label: 'Create',routerLink:['createOrEdit'] },
      //   {label:'Sign in',routerLink:['../login']},
      //   {label:'Sign up',routerLink:['../signUp']}
        
      // ];

      // this.activeItem = this.items[0];
  }
}
