import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { GetTokenService } from '../../token/get-token.service'

@Injectable({
  providedIn: 'root'
})
export class MyComicsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private getTokenService: GetTokenService) { }

  getMyComics(){
    return this.http.get(`${this.API_URI}/myComics`, {headers: this.getTokenService.getToken()})
  }

  getMyComicById(comicId){
    return this.http.get(`${this.API_URI}/myComics/${comicId}`, {headers: this.getTokenService.getToken()});
  }

  deleteComic(comicId){
    return this.http.delete(`${this.API_URI}/myComics/${comicId}`, {headers: this.getTokenService.getToken()});
  }
}
