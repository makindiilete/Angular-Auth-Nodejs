import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // ds original request user makes to the server
    let tokenizedReq = req.clone({
      // we intercept it and pass a Bearer token
      setHeaders: {
        Authorization: `Bearer ${this._authService.getToken()}`,
      },
    });
    // we then call next to continue the request
    return next.handle(tokenizedReq);
  }
}
