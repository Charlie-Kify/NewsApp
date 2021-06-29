import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importando componentes del módulo para las rutas
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// importando el guard Has-Session
import { HasSessionGuard } from '../guards/session/has-session.guard';


//  Creanto una constante de rutas hijas
// Añadiendo propiedades de Guards a dos rutas(dashboard y about):
const routesChindren: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [HasSessionGuard]},
  {path: 'about', component: AboutComponent, canActivate: [HasSessionGuard]},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

// Constante de Ruta home y estableciendo la variable de rutas hijas
const routes: Routes = [
  {path: 'home', component: HomeComponent, children: routesChindren},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
