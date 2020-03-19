import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {
  }
  canActivate() {
    /*
    const token = this.cookieService.get('accessToken');
    console.log('token=', token);
    console.log(token === '');
    if (token === '') {
      this.router.navigate(['/login/']);
    } else {
      console.log('all cookies=', this.cookieService.getAll());
      return true;
    }*/
    const token = sessionStorage.getItem('accessToken');
    console.log('token=', token);
    if (sessionStorage.getItem('accessToken') == null) {
      this.router.navigate(['/login/']);
    } else {
      return true;
    }
  }
}
