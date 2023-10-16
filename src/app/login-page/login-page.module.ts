import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginHomeComponent,
    LoginHeaderComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,ReactiveFormsModule
  ]
})
export class LoginPageModule { }
