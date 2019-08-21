import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { MarvelComicsService } from '../../../services/comics/marvelComics/marvel-comics.service'

import { AppComponent } from '../../../app.component'

@Component({
  selector: 'app-marvel-comics',
  templateUrl: './marvel-comics.component.html',
  styleUrls: ['./marvel-comics.component.css']
})
export class MarvelComicsComponent implements OnInit {

  data: any = []

  constructor(private marvelComicsService: MarvelComicsService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
    this.getComics();
  }

  getComics(){
    this.marvelComicsService.getComics().subscribe(
      res =>{
        this.appComponent.changeNavigation(true)
        this.data = res
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
