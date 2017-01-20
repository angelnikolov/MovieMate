import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'

@Injectable()
export class AccountService {

    constructor(public http: Http) { }

    public getAccountId() {
        return this.http.get(`/account`)
            .map((response: any) => { return response.json().id })
    }

}