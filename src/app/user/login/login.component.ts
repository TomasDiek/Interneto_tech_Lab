import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService:AuthService, private router:Router){}
  ngOnInit(): void {
    alertify.set('notifier','position', 'top-right');
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value)
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.userName)
      alertify.success("Login was Successful")
      this.router.navigate(['entry/buy']);
    }
    else{
      alertify.error("Check your login credentials")
    }
  }
}
