import { Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { APP_CONFIG_TOKEN } from '../opaques';
import IAppConfig from '../../../environments/IAppConfig'

@Injectable()
export class AuthService {
  constructor(@Inject(APP_CONFIG_TOKEN) private APP_CONFIG: IAppConfig,private http: Http) { }

  getToken() {
    return this.http.get(`/authentication/token/new`)
      .map((response: any) => {
        let token = response.json().request_token
        let redirectTo = `${this.APP_CONFIG.APP_URL}/login`;
        location.href = `${this.APP_CONFIG.THEMOVIE_DB_BASE_URL}/authenticate/${token}?redirect_to=${redirectTo}`, ``;
      });
  }

  getSession(request_token: string) {
    return this.http.get(`/authentication/session/new?request_token=${request_token}`)
      .map((response: any) =>  response.json().session_id
      );
  }

}
