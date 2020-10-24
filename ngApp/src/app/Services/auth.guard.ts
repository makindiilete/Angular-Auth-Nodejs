import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): boolean {
    // returns true if user is logged in
    if (this._authService.isLoggedIn()) {
      return true;
    }
    //else navigate the user to login and return false
    this._router.navigate(['/login']);
    return false;
  }
}
