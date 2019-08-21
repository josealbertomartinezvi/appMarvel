import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignOutService {

  constructor() { }

  logout(){
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN')
  }
  
}
