import { Component, OnInit } from '@angular/core';
import { SignIn } from '../../../models/auth/SignIn';

import { Router, ActivatedRoute } from '@angular/router';

import { SignInService } from '../../../services/auth/signIn/sign-in.service';

import { AppComponent } from '../../../app.component'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public loading = false;

  sign_In: SignIn = {
    email: '',
    password: ''
  }   

  constructor(private signInService: SignInService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
    //this.loading = true;
    this.appComponent.authNavBar = false
    this.appComponent.userNavBar = true
  }

  signIn(){
    this.loading = true;
    this.signInService.signIn(this.sign_In)
      .subscribe(
        res => {
          this.loading = false;
          this.router.navigate(['/comics'])
        },
        err => {
          this.loading = false;
          alert(err.error.message)
        }
      );    

     
  }  

}
