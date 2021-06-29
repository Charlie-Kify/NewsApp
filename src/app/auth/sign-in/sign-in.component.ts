import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup

  constructor(
    private router: Router,
    private authService : AuthServiceService,
  ) { 
    this.signinForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', Validators.required),
      confirmPasssword: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    })
  }

  onSignIn(){
    console.log('FormGroup', this.signinForm);
    const values = this.signinForm.value;
    const formIsValid= this.signinForm.valid;
    const controlName = this.signinForm.get('name');
    const controlNameIsValid = this.signinForm.get('name')!.valid;

    if(values.password === values.confirmPassword){
      console.log('Formulario válido');

      this.authService.signIn(
        values.name,
        values.email,
        values.password,
      );
      this.router.navigate(['/','module-auth', 'login']);
    } else{
      console.log('Las contraseñas no son iguales');
      
    }
    
  }

}
