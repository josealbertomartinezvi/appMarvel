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

  public loading = false;
  data: any = []

  constructor(private myComicsService: MyComicsService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
    this.loading = true;
    this.appComponent.authNavBar = true
    this.appComponent.userNavBar = false
    this.getMyComics()
  }

  getMyComics(){
    this.myComicsService.getMyComics().subscribe(
      res =>{
        this.loading = false;
        this.data = res
      },
      err => {
        this.loading = false;
        alert(err.error.message)
        this.router.navigate(['/'])
      }
    )
  }

}
