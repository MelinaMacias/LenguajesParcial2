import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-container-dashboard',
  templateUrl: './container-dashboard.component.html',
  styleUrls: ['./container-dashboard.component.css']
})
export class ContainerDashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  cerrarSesion() {

    this.authenticationService.logout();
    this.router.navigate(["/"]);

  }

}
