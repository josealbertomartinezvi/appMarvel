import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  mainNav: boolean = true
  userNav: boolean = false

  constructor() { }

  ngOnInit() {
 
  }

  changeNavigation(value: boolean){
    if(value === false){
      this.mainNav = true
      this.userNav = false  
    }else{
      this.mainNav = false
      this.userNav = true
    }    
  }
}
