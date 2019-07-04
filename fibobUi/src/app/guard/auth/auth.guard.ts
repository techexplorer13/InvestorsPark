import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  isAuth:boolean;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.authService.isLoggedIn().toPromise().then(value=>{
      this.isAuth=value;
    });
    
    return this.checkEligibiltyForLogin();
  } 

  checkEligibiltyForLogin(): boolean {
    if(this.isAuth==true){
        this.router.navigate(['/allmutualfund']);
    }
    else{
     return true;
    }
  }
}
