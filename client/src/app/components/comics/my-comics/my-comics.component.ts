import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { MyComicsService } from '../../../services/comics/myComics/my-comics.service'

import { AppComponent } from '../../../app.component'

@Component({
  selector: 'app-my-comics',
  templateUrl: './my-comics.component.html',
  styleUrls: ['./my-comics.component.css']
})
export class MyComicsComponent implements OnInit {

  data: any = []

  constructor(private myComicsService: MyComicsService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
    this.getMyComics()
  }

  getMyComics(){
//    this.myComicsService.getMyComics()

    this.myComicsService.getMyComics().subscribe(
      res =>{
        this.appComponent.changeNavigation(true)
        this.data = res
        console.log(this.data)
      },
      err => {
        if(err.status == '403'){
        //  this.appComponent.changeNavigation(false)
        }
        
        if(err.status == '401'){
          
        }
        this.router.navigate(['/'])
        this.appComponent.changeNavigation(false)
        
      }
    )
  }

}
