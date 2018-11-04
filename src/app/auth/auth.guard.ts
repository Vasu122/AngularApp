import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  debugger
  constructor(private user:UserService){
  }
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("this.user.getUserLoggedIn()", this.user.getUserLoggedIn());
   return this.user.getUserLoggedIn();
  }
}
