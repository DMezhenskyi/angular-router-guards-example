import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadGuardGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}
  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth
      .isLoggedIn()
      .pipe(map((isLoggedIn) => isLoggedIn || this.router.createUrlTree([''])));
  }
}
