import { Component, OnInit } from '@angular/core';
import { SignIn } from '../../../models/auth/SignIn';

import { Router, ActivatedRoute } from '@angular/router';

import { SignInService } from '../../../services/auth/signIn/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  sign_In: SignIn = {
    email: '',
    password: ''
  }   

  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit() {
  }

  signIn(){
    this.signInService.signIn(this.sign_In)
      .subscribe(
        res => {
          if(res){
            this.router.navigate(['/comics']);
          }else{
            alert('user doesnt exist')
          }
        },
        err => console.log(err)
      );    

     
  }  

}
