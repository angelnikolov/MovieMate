import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'

@Injectable()
export class AccountService {

    constructor(public http: Http) { }

    public getAccountId() {
        return this.http.get(`https://api.themoviedb.org/3/account?api_key=ca49bfda426c4e87678009d2dfc4361e&session_id=${localStorage.getItem('session_id')}`)
            .map((response: any) => { return response.json().id })
    }

}