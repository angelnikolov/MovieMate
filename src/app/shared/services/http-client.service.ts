import { Injectable, Inject, Optional, OpaqueToken } from "@angular/core";
import { Http, Headers, RequestOptionsArgs, URLSearchParams, RequestMethod, Request, Response, ConnectionBackend, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../services'
import { APP_CONFIG_TOKEN } from '../opaques';
import IAppConfig from '../../../environments/IAppConfig'
@Injectable()
export class HttpClient extends Http {

  constructor( @Inject(APP_CONFIG_TOKEN) private APP_CONFIG: IAppConfig, protected _backend: ConnectionBackend, protected _defaultOptions: RequestOptions, protected _localStorageService: LocalStorageService) {

    super(_backend, _defaultOptions);
  }


  _setCustomParameters(options: RequestOptionsArgs): RequestOptionsArgs {
    if (!options) {
      options = new RequestOptions({});
    }
    let _searchParams = new URLSearchParams();
    _searchParams.append('api_key', this.APP_CONFIG.THEMOVIE_DB_API_KEY);
    _searchParams.append('session_id', this._localStorageService.getItem('session_id'));
    options.search = (options.search ? '&' : '') + _searchParams.toString()
    return options;
  }

  request(request: Request, options?: RequestOptionsArgs): Observable<Response> {
    const optionsObject = this._setCustomParameters(options);
    if (request.method !== RequestMethod.Get) {
      request.url = request.url + '?' + optionsObject.search;
    }
    request.url = this.APP_CONFIG.THEMOVIE_DB_API_URL + request.url;
    return super.request((request.method === RequestMethod.Get ? request.url : request), optionsObject)
  }
}