import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

    constructor(private router: Router) {

    }
    canLoad() {
        if(Boolean(localStorage.getItem('session_id'))){
            return true;
        }
        else{
            this.router.navigate(['login']);
            return false;
        }
    }
    canActivate() :boolean {
        if(Boolean(localStorage.getItem('session_id'))){
            return true;
        }
        else{
            this.router.navigate(['login']);
            return false;
        }
    }
} 