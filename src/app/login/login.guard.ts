import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs'

@Injectable()
export class LoginGuard implements CanActivate {


    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        if (!route.queryParams['request_token']) { return Observable.of(true) } else {
            return this.authService.getSession(route.queryParams['request_token']).map((session_id) => {
                if (session_id) {
                    localStorage.setItem('session_id', session_id);
                    this.router.navigate(['home']);
                    return false;
                }
                else {
                    return true;
                }
            })
        }
    }
}