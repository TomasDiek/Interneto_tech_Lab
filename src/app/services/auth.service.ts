import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { UserForLogin,UserForRegister } from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseUrl=environment.baseUrl;

  authUser(user:UserForLogin){
    return this.http.post(this.baseUrl+ 'Account/login',user);
  }
  registerUser(user: UserForRegister) {
    let temp ={
        userName:user.userName,
        password:user.userPassword,
    }
    console.log("register",temp)
    return this.http.post(this.baseUrl + 'Account/register', temp);
}
}
