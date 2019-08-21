import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MyComicsService } from '../../../../services/comics/myComics/my-comics.service';

import { AppComponent } from '../../../../app.component'

@Component({
  selector: 'app-my-comic-by-id',
  templateUrl: './my-comic-by-id.component.html',
  styleUrls: ['./my-comic-by-id.component.css']
})
export class MyComicByIdComponent implements OnInit {

  private comicData: any = []

  constructor(private myComicsService: MyComicsService, private router: Router, private activatedRoute: ActivatedRoute, private appComponent: AppComponent) { }

  ngOnInit() {

    let comicId = this.activatedRoute.snapshot.params.id
    this.getMyComicById(comicId)

  }

  getMyComicById(comicId){
    this.myComicsService.getMyComicById(comicId)
    .subscribe(
      res => {
        this.appComponent.changeNavigation(true)
        this.comicData = res
      },
      err => {
        if(err.status == '403'){
          this.appComponent.changeNavigation(false)
        }
        if(err.status == '401'){
          this.appComponent.changeNavigation(false)
        }
        this.router.navigate(['/'])
      }
    )
  }  


}
