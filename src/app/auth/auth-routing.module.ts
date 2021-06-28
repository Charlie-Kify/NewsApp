import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Imprtando componentes LogIn y SignIn a las rutas del Módulo Auth
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  // Agegando las rutas de los componentes del módulo Auth
  {path: 'login', component:LoginComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
