import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../../models/auth/SignUp';

import { Router, ActivatedRoute } from '@angular/router';


import { SignUpService } from '../../../services/auth/signUp/sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  sign_Up: SignUp = {
    id: null,
    name: '',
    idDocument: null,
    email: '',
    password: ''
  }    

  constructor(private signUpService: SignUpService, private router: Router) { }

  ngOnInit() {
  }

  signUp(){
    delete this.sign_Up.id;

    this.signUpService.signUp(this.sign_Up)
      .subscribe(
        res => {
          alert(`!Welcome ${res}!`);
          this.router.navigate(['/signIn']);
          //console.log(res)
        },
        err => console.log(err)
      );    

     
  }

}

