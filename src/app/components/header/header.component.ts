import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedinUser:string | null | undefined;

  ngOnInit(): void {
    alertify.set('notifier','position', 'top-right');
  }
  loggedin(){
    this.loggedinUser=localStorage.getItem('userName');
    return this.loggedinUser;
  }
  onLogout(){
   localStorage.removeItem('token') ;
   localStorage.removeItem('userName') ;
   alertify.success("You are logged out");
  }
}
