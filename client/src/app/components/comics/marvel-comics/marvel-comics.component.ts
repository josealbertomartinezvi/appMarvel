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

  public loading = false;

  data: any = []

  constructor(private marvelComicsService: MarvelComicsService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
    this.loading = true;
    this.appComponent.authNavBar = true
    this.appComponent.userNavBar = false
    this.getComics();
  }

  getComics(){
    this.marvelComicsService.getComics().subscribe(
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
