import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './modules/login/auth-guard.service';
import { AuthTokenInterceptor } from './modules/utility/auth-token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginModule } from './modules/login/login.module';
import { NgModule } from '@angular/core';
import { UtilityModule  } from './modules/utility/utility.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    UtilityModule
  ],
  providers: [AuthGuard,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthTokenInterceptor ,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
