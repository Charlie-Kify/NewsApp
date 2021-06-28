import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // Añadiendo Formularios Reactivos de Angular
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
