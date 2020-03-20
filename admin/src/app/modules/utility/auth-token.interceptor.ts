import { AuthenticationService } from './services/authentication.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('request.url=', request.url);
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticationService.token}`
      }
    });
    return next.handle(request);
  }
}
