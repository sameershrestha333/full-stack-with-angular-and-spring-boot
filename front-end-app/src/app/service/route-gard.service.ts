import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGardService implements CanActivate {

  constructor(private autheService: HardcodedAuthenticationService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.autheService.isLogedIn()){
      return true;
    }

    this.router.navigate(['login']);
      return false;
    
    
  }

}
