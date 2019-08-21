import { Component, OnInit } from '@angular/core';
import { SignOutService } from '../../../services/auth/signOut/sign-out.service'

import { Router} from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private signOutService: SignOutService, private router: Router) { }

  ngOnInit() {
    this.signOutService.logout()
    this.router.navigate(['/'])
  }

}
