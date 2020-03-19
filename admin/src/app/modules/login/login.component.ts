import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginObj } from './login-obj';
import { Router } from '@angular/router';
import { AuthenticationService } from '../utility/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new LoginObj('user', 'password');
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  login(loginObj: LoginObj) {

    this.authenticationService.login(loginObj.userName, loginObj.password)
    .subscribe ((resultCode: number) => {
                  console.log('resultCode=' + resultCode);
                  switch (resultCode) {
                    case 0 : this.router.navigate(['../']);
                             break;
                    case -2: alert('Invalid username or password');
                             break;
                    default:
                            alert('Unknown Error.');
                            break;
                  }
                },
                (error: HttpErrorResponse) => {
                  alert(error.message);
                });
  }
  ngOnInit(): void {
  }

}
