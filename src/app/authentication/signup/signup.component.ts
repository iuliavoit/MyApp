import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService,AuthResponseData} from "../auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading=false;
  error:string=null;

  constructor(private authService:AuthService, private router: Router) { }



    onSignUp(signupform: NgForm) {
      if(!signupform.valid){
        return;
      }
      const email=signupform.value.email;
      const password=signupform.value.password;
      let authObs: Observable<AuthResponseData>;

      this.isLoading=true;
      authObs= this.authService.signup(email,password);
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

      signupform.reset();
    }

  onHandleError() {
    this.error=null;
  }
}

