import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserForRegister } from 'src/app/interface/user';
import * as alertify from 'alertifyjs';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerationForm!:FormGroup;
  user!:UserForRegister;
  userSubmitted!:boolean;
  constructor(private formBuilder: FormBuilder,private authService: AuthService){}
  ngOnInit(): void {
    alertify.set('notifier','position', 'top-right');
    this.createRegistrationForm();
  }
  createRegistrationForm(){
    this.registerationForm= this.formBuilder.group({
      userName:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(6)]],
      confirmPassword:[null,[Validators.required,Validators.minLength(6)]],
      mobile:[null,[Validators.required,Validators.minLength(8)]],
    },
    { validators: this.compareValidator })
  }
  
  compareValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')!.value;
    const confirmPassword = control.get('confirmPassword')!.value;
    return password === confirmPassword ? null : { passwordMatch: true };
  }
  get userName(){
    return this.registerationForm.get('userName') as FormControl
  }
  get userEmail(){
    return this.registerationForm.get('email') as FormControl
  }
  get userPassword(){
    return this.registerationForm.get('password') as FormControl
  }
  get userConfirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl
  }
  get userMobileNumber(){
    return this.registerationForm.get('mobile') as FormControl
  }
  passwordMatchingValidatior(fg: FormGroup): Validators {
     // @ts-ignore: Object is possibly 'null'.
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
        {notmatched: true};
}
  onSubmit() {
    console.log(this.registerationForm.value);
    this.userSubmitted = true;

    if (this.registerationForm.valid) {
        // this.user = Object.assign(this.user, this.registerationForm.value);
        this.authService.registerUser(this.userData()).subscribe(() =>
        {
            this.onReset();
            alertify.success('Congrats, you are successfully registered');
        });
    }
}
  userData():UserForRegister{
    return this.user={
      userName:this.userName.value,
      userEmail:this.userEmail.value,
      userPassword:this.userPassword.value,
      userMobileNumber:this.userMobileNumber.value
    }
  }
  onReset() {
    this.userSubmitted = false;
    this.registerationForm.reset();
  }
}
