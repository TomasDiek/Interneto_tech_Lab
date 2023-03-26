import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  constructor(){}
  ngOnInit(): void {
      this.registerForm=new FormGroup({
        userName: new FormControl(null,Validators.required),
        userEmail:new FormControl(null,[Validators.required,Validators.email]),
        userPassword: new FormControl(null,[Validators.required,Validators.minLength(6)]),
        userConfirmPassword: new FormControl(null,[Validators.required,Validators.minLength(6)]),
        userMobileNumber: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      },
      { validators: this.compareValidator }
      );
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
    console.log(this.registerForm)
  }
}
