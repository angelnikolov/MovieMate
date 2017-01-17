import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http, private router: Router) { }

  getToken() {
    return this.http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=ca49bfda426c4e87678009d2dfc4361e`)
      .map((response: any) => {
        let token = response.json().request_token
        let redirectTo = `http://localhost:4200/login`;
        location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${redirectTo}`, ``;
      });
  }

  getSession(request_token: string) {
    return this.http.get(`https://api.themoviedb.org/3/authentication/session/new?api_key=ca49bfda426c4e87678009d2dfc4361e&request_token=${request_token}`)
      .map((response: any) => {
        let session_id = response.json().session_id;
        if (session_id) {
          localStorage.setItem('session_id', session_id);
          this.router.navigate(['home']);
          return false;
        }
        else {
          alert('No session_id received!');
          return true;
        }
      });
  }

}
