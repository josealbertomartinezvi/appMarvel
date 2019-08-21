import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignUp } from '../../../models/auth/SignUp';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  signUp(signUp: SignUp){
    return this.http.post(this.API_URI + '/users/signUp', signUp)
  }   


}
