import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AnonymousOnlyGuard implements CanLoad {

    constructor(private router: Router) {

    }
    canLoad(route: Route): boolean {

        if (Boolean(localStorage.getItem('session_id'))) {
            this.router.navigate(['/directory/now-playing']);
            return false;
        }
        else {
            return true;
        }

    }
} 