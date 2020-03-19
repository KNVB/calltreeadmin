import { AuthGuard } from './modules/login/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes =  [
                          {path: 'login', component: LoginComponent},
                          {
                            canActivate: [AuthGuard],
                            path: '',
                            component: HomeComponent
                          }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
