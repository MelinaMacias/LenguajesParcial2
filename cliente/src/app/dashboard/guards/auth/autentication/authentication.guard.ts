
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthenticationService } from 'src/app/dashboard/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if( this.authService.isAuthenticated() ){
      return true; }

    this.router.navigate(['login'], { queryParams: {next: state.url} });
    return false;

  }

}
