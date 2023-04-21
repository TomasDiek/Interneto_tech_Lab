export interface UserForRegister {
    userName:string;
    userEmail?:string;
    userPassword:string;
    userMobileNumber?:string;
}
export interface UserForLogin {
    userName:string;
    userPassword:string;
    token:string;
}
