import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  constructor(private _http: HttpClient, private _router: Router) {}

  registerUser(user: User) {
    return this._http.post<any>(this._registerUrl, user);
  }

  loginUser(user: User) {
    return this._http.post<any>(this._loginUrl, user);
  }

  //ds method returns true or false if a token is present in the localstorage
  isLoggedIn() {
    //ds return true/false depending on if token is present or not
    return !!localStorage.getItem('token');
  }

  //ds returns the current token in the localStorage
  getToken() {
    return localStorage.getItem('token');
  }

  // ds logout the user and return d user to homepage
  logoutUser() {
    localStorage.removeItem('token');
    //navigate the user to home
    this._router.navigateByUrl('/events');
  }
}
