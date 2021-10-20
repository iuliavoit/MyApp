import { Component, OnInit } from '@angular/core';
import {AuthService, AuthResponseData} from "../auth.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading=false;
  error:string=null;
  isAdmin=false;
  constructor(private authService:AuthService, private router:Router) { }



  onLogin(loginform: NgForm){
    if(!loginform.valid){
      return;
    }
    const email=loginform.value.email;
    const password=loginform.value.password;
    if(email==="admin@yahoo.com"&&password==="adminadmin"){
      this.isAdmin=true;
    }
    let authObs: Observable<AuthResponseData>;
    this.isLoading=true;
    authObs=this.authService.login(email,password);
    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        if(this.isAdmin===true){this.router.navigate(['/adminhub']);}
        else
        this.router.navigate(['/cocktails']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );


    loginform.reset();
  }

}
