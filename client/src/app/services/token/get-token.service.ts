import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  private token: string; 

  constructor() { }

  getToken(): HttpHeaders{

    return new HttpHeaders().append('Authorization', localStorage.getItem('ACCESS_TOKEN'))
       
  }
}
