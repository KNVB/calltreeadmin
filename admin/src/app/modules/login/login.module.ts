import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoginComponent],
  exports: [
            LoginComponent
           ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class LoginModule { }
