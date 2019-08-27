import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  private _authNavBar: boolean
  private _userNavBar: boolean

  constructor() { }

  get authNavBar(): boolean {
    return this._authNavBar
  }

  set authNavBar(authNavBar: boolean){
    this._authNavBar = authNavBar
  }

  get userNavBar(): boolean {
    return this._userNavBar
  }

  set userNavBar(userNavBar: boolean){
    this._userNavBar = userNavBar
  }

  ngOnInit() {
    
  }
}
