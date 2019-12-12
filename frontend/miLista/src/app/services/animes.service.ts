import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { IAnime } from '../models/anime';

@Injectable()

export class AnimesService {
  URL: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);


  constructor(private httpClient: HttpClient) { }


  createAnime(anime: IAnime) {
    return this.httpClient.post<IAnime>(`${this.URL}/agregar-anime`, anime);
  }

  getAnime() {
    return this.httpClient.get<any>(`${this.URL}/lista-animes`);
  }











}
