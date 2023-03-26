import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm!:FormGroup;
  user!:User;
  userSubmitted!:boolean;
  constructor(private formBuilder: FormBuilder,private userService:UserService){}
  ngOnInit(): void {
    alertify.set('notifier','position', 'top-right');
    this.createRegistrationForm();
  }
  createRegistrationForm(){
    this.registerForm= this.formBuilder.group({
      userName:[null,Validators.required],
      userEmail:[null,[Validators.required,Validators.email]],
      userPassword: [null,[Validators.required,Validators.minLength(6)]],
      userConfirmPassword:[null,[Validators.required,Validators.minLength(6)]],
      userMobileNumber:[null,[Validators.required,Validators.minLength(8)]],
    },
    { validators: this.compareValidator })
  }
  
  compareValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('userPassword')!.value;
    const confirmPassword = control.get('userConfirmPassword')!.value;
    return password === confirmPassword ? null : { passwordMatch: true };
  }
  get userName(){
    return this.registerForm.get('userName') as FormControl
  }
  get userEmail(){
    return this.registerForm.get('userEmail') as FormControl
  }
  get userPassword(){
    return this.registerForm.get('userPassword') as FormControl
  }
  get userConfirmPassword(){
    return this.registerForm.get('userConfirmPassword') as FormControl
  }
  get userMobileNumber(){
    return this.registerForm.get('userMobileNumber') as FormControl
  }

  onSubmit(){
    // console.log(this.registerForm);

    this.userSubmitted=true;
    if(this.registerForm.valid){
      // this.user= Object.assign(this.user,this.registerForm.value);
      this.userService.addUser(this.userData());
      this.registerForm.reset();
      this.userSubmitted=false;
      alertify.success("User was successfully registered")
    }
    else{
      alertify.error("Please provide the required fields")
    }
  }
  userData():User{
    return this.user={
      userName:this.userName.value,
      userEmail:this.userEmail.value,
      userPassword:this.userPassword.value,
      userMobileNumber:this.userMobileNumber.value
    }
  }
}
