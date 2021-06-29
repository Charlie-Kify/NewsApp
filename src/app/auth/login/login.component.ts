import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Importando en router
import { Router } from '@angular/router';
// Importando el servicio auth-service
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService : AuthServiceService,
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', Validators.required)
    })
  }

  // Añadiendo Métodos del LogIn

  onLogIn() {
    if (this.loginForm.valid) {
      console.log('inicio de sesión correcto');
      const isValidUser = this.authService.login(
        this.loginForm.get('email')!.value,
        this.loginForm.get('password')!.value,
      );

      if (isValidUser) {
        this.router.navigate(['/', 'module-home', 'home', 'dashboard'])
      } else {
        console.log('el usuario no existe');
      }
    } else {
      this.loginForm.markAllAsTouched();
      console.log('Ingrese todos los campos');
    }
  }


  onSignIn() {
    this.router.navigate(['/', 'module-auth', 'sign-in']);
  }

  // Añadiendo la funcion del evento del teclado
  onKeyPress(event: any) {
    console.log(event);

  }

  onChange(event: any) {
    console.log(event);

  }
  

}
