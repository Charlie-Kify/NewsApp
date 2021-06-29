import { Component, OnInit } from '@angular/core';
// Importando servicio y router
import { Router } from '@angular/router'
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthServiceService,
  ) { }

  ngOnInit(): void {
  }

  // Añadiendo función de Logout
  onLogOut(){
    this.authService.logout();
    this.router.navigate(['/module-auth/auth/login'])
  }

}
