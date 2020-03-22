
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
// import {Http, Headers} from "@angular/http";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

// import {tokenNotExpired} from "angular2-jwt";
import {JwtHelperService} from "@auth0/angular-jwt";

import {Data} from "../interfaces/data";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  authToken: any;
  user: any;


  constructor(
    // private http:Http,
    private http:HttpClient,
    public jwtHelper: JwtHelperService
  ) {
    // const httpOptions = {
    //   headers: new HttpHeaders(),
    //   'Content-Type':'application/json',
    // };
  }

  registerUser(user){
    // let headers = new Headers();
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<Data>('http://localhost:3000/users/register', user, {
      headers:headers
    }).pipe(map(res => res));
  }

  authenticateUser(user){
    // let headers = new Headers();
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<Data>('http://localhost:3000/users/authenticate', user, {
      headers:headers
    }).pipe(map(res => res));
  }

  // changed headers to match Angular 6 documentation and added Observable<Data> as return type -https://angular.io/guide/http#http-headers
  // commented code represents previous setup for Angular 2
  getProfile(): Observable<Data>{
    // let headers = new Headers();
    // formerly headers
    // let headers = new HttpHeaders();
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.authToken
      })
    }
    // console.log(this.authToken);
    // headers.set('Content-Type', 'application/json');
    // headers.set('Authorization', this.authToken);
    // console.log(headers);
    return this.http.get<Data>('http://localhost:3000/users/profile', httpOptions
    //   {
    //   headers:headers
    // }
    );
    // }).pipe(map(res => res));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(): boolean {
    // explicitly named token since it no longer looks for id_token by default
    // return tokenNotExpired('id_token');
    return !this.jwtHelper.isTokenExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
