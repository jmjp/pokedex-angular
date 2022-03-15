import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthcheckGuard implements CanActivate {
  user: boolean = true;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //pode ser utilizado para implementar uma checagem local de jwt e proteger a rota;
    if(this.user == true){
      return true;
    }
    return false;
  }
  
}
