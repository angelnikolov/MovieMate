import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import { AccountService } from './account.service';

@Injectable()
export class MovieService {
    constructor(private http: Http, private accountService: AccountService) { }

    public getNowPlayingMovies() {
        return this.getFavoriteByType('now_playing');
    }
    public getPopularMovies() {
        return this.getFavoriteByType('popular');
    }

    public getAccountFavoriteMovies() {
        return this.accountService.getAccountId()
            // .delay(5000)
            .switchMap((account_id: number) =>
                this.http.get(`/account/${account_id}/favorite/movies?language=en-US&page=1`))
            .map((response: any) =>
                response.json()
                    .results.map((movie: any) => {
                        movie.isFavorited = true;
                        return movie;
                    }))
    }

    public getMovieDetails(id: number) {
        return this.http.get(`/movie/${id}`)
            .switchMap(res => {
                let movie = res.json();
                return this.http.get(`/movie/${movie.id}/account_states`)
                    .map((results: any) => {
                        movie.isFavorited = results.json().favorite;
                        return movie;
                    })
            });

    }
    public favorMovie(movie: any) {
        return this.http.get(`/account`)
            .switchMap((response: any) => Observable.of(response.json().id))
            .switchMap((account_id: number) =>
                this.http.post(`/account/${account_id}/favorite`,
                    {
                        "media_type": "movie",
                        "media_id": movie.id,
                        "favorite": !movie.isFavorited
                    }))
    }


    public getSimilarMovies(movie: any) {
        return this.http.get(`/movie/${movie.id}/similar?language=en-US&page=1`)
            .switchMap((response: any) => Observable.of(response.json().results));
    }

    public getRecommendedMovies(movie: any) {
        return this.http.get(`/movie/${movie.id}/recommendations?language=en-US&page=1`)
            .switchMap((response: any) => Observable.of(response.json().results));
    }

    private getFavoriteByType(type: string) {
        return this.getAccountFavoriteMovies()
            .map((movies: Array<any>) => movies.map((movie: any) => movie.id))
            .switchMap((accountFavoriteIds: any) => {
                return this.http.get(`/movie/${type}?language=en-US&page=1`)
                    .map((response: any) => {
                        return response.json().results.map((movie: any) => {
                            movie.isFavorited = (accountFavoriteIds.indexOf(movie.id) !== -1 ? true : false);
                            return movie;
                        })
                    })
            })
    }
}