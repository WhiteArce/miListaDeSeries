import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { IJwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

  URL: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient: HttpClient, private router: Router) { }

  register(user: IUser): Observable<IJwtResponse> {
    return this.httpClient.post<IJwtResponse>(`${this.URL}/register`, user);
  }

  login(user: IUser): Observable<IJwtResponse> {
    return this.httpClient.post<IJwtResponse>(`${this.URL}/login`, user);
    this.router.navigate(['/home']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }


  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }


  public getToken(): string {
    return localStorage.getItem('token');
  }


}
