import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MarvelComicsService } from '../../../../services/comics/marvelComics/marvel-comics.service';

import { AppComponent } from '../../../../app.component'

@Component({
  selector: 'app-marvel-comic-by-id',
  templateUrl: './marvel-comic-by-id.component.html',
  styleUrls: ['./marvel-comic-by-id.component.css']
})
export class MarvelComicByIdComponent implements OnInit {

  public loading = false;

  private comicData: any = []

  constructor(private marvelComicsService: MarvelComicsService, private router: Router, private activatedRoute: ActivatedRoute, private appComponent: AppComponent) { }

  ngOnInit() {
    this.loading = true;
    this.appComponent.showNav = true
    let comicId = this.activatedRoute.snapshot.params.id
    this.getComicById(comicId)
   
  }

  getComicById(comicId){
    this.marvelComicsService.getComicById(comicId)
    .subscribe(
      res => {
        this.loading = false;
        this.comicData = res
      },
      err => {
        this.loading = false;
        alert(err.error.message)
        this.router.navigate(['/'])
      }
    )
  }  

  addComic(){
    this.marvelComicsService.addToMyComics(this.comicData)
    .subscribe(
      res =>{
        this.loading = false;
        this.router.navigate(['/myComics'])
      },
      err =>{
        this.loading = false;
        alert(err.error.message)
        this.router.navigate(['/'])
      }
    )
  }


}
