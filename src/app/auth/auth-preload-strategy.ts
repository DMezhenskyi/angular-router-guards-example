import { AuthService } from './auth.service';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthPreloadStrategy implements PreloadingStrategy {
  constructor(private auth: AuthService) {}

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.auth
      .isLoggedIn()
      .pipe(switchMap((isUserLoggedIn) => (isUserLoggedIn ? fn() : of(null))));
  }
}
