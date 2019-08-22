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

  public loading = false;

  private comicData: any = []

  constructor(private myComicsService: MyComicsService, private router: Router, private activatedRoute: ActivatedRoute, private appComponent: AppComponent) { }

  ngOnInit() {
    this.loading = true;
    let comicId = this.activatedRoute.snapshot.params.id
    this.getMyComicById(comicId)

  }

  getMyComicById(comicId){
    this.myComicsService.getMyComicById(comicId)
    .subscribe(
      res => {
        this.loading = false;
        this.appComponent.changeNavigation(true)
        this.comicData = res
      },
      err => {
        this.loading = false;
        alert(err.error.message)
        this.appComponent.changeNavigation(false)
        this.router.navigate(['/'])
      }
    )
  }  

  deleteComic(){
    let option: boolean = confirm('Are you sure you want to delete this comic?') 
    if(option){
      this.myComicsService.deleteComic(this.comicData._id)
      .subscribe(
        res => {
          this.loading = false;
          console.log(res)
          this.router.navigate(['/myComics'])
        },
        err => {
          this.loading = false;
        }
      )  
    }
  }


}
