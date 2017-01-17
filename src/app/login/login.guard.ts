import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs'

@Injectable()
export class LoginGuard implements CanActivate {


    constructor(private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot) {
        return !route.queryParams['request_token'] ? Observable.of(true) : this.authService.getSession(route.queryParams['request_token']);
    }
}