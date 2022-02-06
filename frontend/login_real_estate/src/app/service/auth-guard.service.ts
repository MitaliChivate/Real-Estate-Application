import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth : AuthenticationService, public router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // to check if user is logged in
    // if logged in then only allow the access over secured URL
    // or redirect to login component
    if(this.auth.isUserLoggedIn())
      if(this.auth.typeOfUser() == "Admin"||this.auth.typeOfUser() == "User")
      {
        
       if(route.url.toString() == "admin" ||route.url.toString()=="User")
          return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
      
    else{
      this.router.navigate(['/login']);
      return false;
    }  
  }  
  }

