import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Simple login
  ADMIN = {
    username: 'folk',
    password: 'folk',
  };

  constructor() {}

  compare(username: string, password: string) {
    return username === this.ADMIN.username && password === this.ADMIN.password;
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.clear();
  }
}

export const canActivateAdmin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let auth = inject(AuthService);
  let router = inject(Router);
  if (!auth.isLoggedIn()) {
    router.navigate(['login']).then()
  }
  return auth.isLoggedIn();
};
