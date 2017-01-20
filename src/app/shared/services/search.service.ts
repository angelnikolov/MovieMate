import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'

@Injectable()
export class SearchService {
    constructor(private http: Http) { }

    public search(searchTerm:string) {
        return this.http.get(`/search/movie?query=${searchTerm}`)
    }
}