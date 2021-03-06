import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {User} from "./user.model";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";


export interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  password:string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?:boolean;
}

@Injectable({providedIn:'root'})

export class AuthService{
  user=new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {
  }
  signup(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseApiKey,
      {
        email:email,
        password:password,
        returnSecureToken:'true'
      }).pipe(catchError(this.handleError), tap(resData=>{
       this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      }
    ));

  }

  login(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseApiKey,{
      email:email,
      password:password,
      returnSecureToken:'true'
    }).pipe(catchError(this.handleError),tap(resData=>{
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }
    ));
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }

  autoLogin(){
    const userData: {
      email:string;
      id: string;
      _token:string;
      _tokenExpirationDate: string;
    }= JSON.parse(localStorage.getItem('userData'));
    if(!userData) return;
    const loadedUser=new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));

    if(loadedUser.token){ //the getter
      this.user.next(loadedUser);
    }
  }

  private handleAuthentication(email:string, userId:string, token:string, expiresIn: number){
    const expirationDate=new Date(new Date().getTime()+ expiresIn*1000)
    const user=new User(email, userId, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData',JSON.stringify(user));
  }

  private handleError(errorResponse: HttpErrorResponse){
    let errMes='An unknown error occured!';
    if(!errorResponse.error||!errorResponse.error.error){
      return throwError(errMes);
    }
    switch(errorResponse.error.error.message){
      case 'EMAIL_EXISTS':
        errMes='This email already exists!';
        break

      case 'EMAIL_NOT_FOUND':
        errMes='This email does not exist!';
        break

      case 'INVALID_PASSWORD':
        errMes='The password is not correct!';
        break
    }
    return throwError(errMes);
  }
}


