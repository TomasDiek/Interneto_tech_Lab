import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/interface/user';
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
    this.authService.authUser(loginForm.value).subscribe(
      // @ts-ignore: Object is possibly 'null'.
      (response: UserForLogin)=> {
        const user = response;
        localStorage.setItem('token',user.token)
        localStorage.setItem('userName',user.userName)
        alertify.success("Login was Successful")
        this.router.navigate(['entry/buy']);
      });
  }
}