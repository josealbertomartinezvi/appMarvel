import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import { SignIn } from '../../../models/auth/SignIn';

import { JwtResponseI } from '../../../models/auth/JwtResponse';

import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  API_URI = 'http://localhost:3000/api'; 
  authSubject = new BehaviorSubject(false);

  constructor(private http: HttpClient) { 
  
  }

  jwt: JwtResponseI = {
    userId: '',
    name: '',
    email: '',
    accessToken: '',
    expiresIn: ''
  }  

  signIn(signIn: SignIn): Observable<JwtResponseI>{
    return this.http.post<JwtResponseI>(this.API_URI + '/users/signIn', signIn)
    .pipe(tap(
      (res: JwtResponseI) => {
        if(res){
          this.jwt.userId = res.userId
          this.jwt.name = res.name
          this.jwt.email = res.email
          this.jwt.accessToken = res.accessToken
          this.jwt.expiresIn = res.expiresIn
          //Save Token
          this.saveToken(this.jwt.accessToken, this.jwt.expiresIn);
        }
      }
    ));
  }   

  private saveToken(token: string, expiresIn: string): void{
      localStorage.setItem("ACCESS_TOKEN", token);
      localStorage.setItem("EXPIRES_IN", expiresIn);
      //this.token = token;
  }


}
