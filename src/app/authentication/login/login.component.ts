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
  constructor(private authService:AuthService, private router:Router) { }



  onLogin(loginform: NgForm){
    if(!loginform.valid){
      return;
    }
    const email=loginform.value.email;
    const password=loginform.value.password;
    let authObs: Observable<AuthResponseData>;
    this.isLoading=true;
    authObs=this.authService.login(email,password);
    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
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
