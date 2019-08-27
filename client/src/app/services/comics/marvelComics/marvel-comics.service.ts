import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { GetTokenService } from '../../token/get-token.service'
import { map, catchError } from 'rxjs/operators'

//import { Comic } from '../../../models/comic/comic'

@Injectable({
  providedIn: 'root'
})
export class MarvelComicsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private getTokenService: GetTokenService) { }

  getComics(){
    return this.http.get(`${this.API_URI}/comics`, {headers: this.getTokenService.getToken()})
  }

  getComicById(comicId: string){
    return this.http.get(`${this.API_URI}/comics/${comicId}`, {headers: this.getTokenService.getToken()})
  }

  addToMyComics(comicData){
    return this.http.post(`${this.API_URI}/myComics`, comicData, {headers: this.getTokenService.getToken()});
  }
}
