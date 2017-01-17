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
                this.http.get(`https://api.themoviedb.org/3/account/${account_id}/favorite/movies?api_key=ca49bfda426c4e87678009d2dfc4361e&language=en-US&page=1&session_id=${localStorage.getItem('session_id')}`))
            .map((response: any) =>
                response.json()
                    .results.map((movie: any) => {
                        movie.isFavorited = true;
                        return movie;
                    }))
    }

    public getMovieDetails(id: number) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ca49bfda426c4e87678009d2dfc4361e`)
            .switchMap(res => {
                let movie = res.json();
                return this.http.get(`https://api.themoviedb.org/3/movie/${movie.id}/account_states?api_key=ca49bfda426c4e87678009d2dfc4361e&session_id=${localStorage.getItem('session_id')}`)
                    .map((results: any) => {
                        movie.isFavorited = results.json().favorite;
                        return movie;
                    })
            });

    }
    public favorMovie(movie: any) {
        return this.http.get(`https://api.themoviedb.org/3/account?api_key=ca49bfda426c4e87678009d2dfc4361e&session_id=${localStorage.getItem('session_id')}`)
            .switchMap((response: any) => Observable.of(response.json().id))
            .switchMap((account_id: number) =>
                this.http.post(`https://api.themoviedb.org/3/account/${account_id}/favorite?api_key=ca49bfda426c4e87678009d2dfc4361e&session_id=${localStorage.getItem('session_id')}`,
                    {
                        "media_type": "movie",
                        "media_id": movie.id,
                        "favorite": !movie.isFavorited
                    }))
    }


    public getSimilarMovies(movie: any) {
        return this.http.get(` https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=ca49bfda426c4e87678009d2dfc4361e&language=en-US&page=1`)
            .switchMap((response: any) => Observable.of(response.json().results));
    }

    public getRecommendedMovies(movie: any) {
        return this.http.get(` https://api.themoviedb.org/3/movie/${movie.id}/recommendations?api_key=ca49bfda426c4e87678009d2dfc4361e&language=en-US&page=1`)
            .switchMap((response: any) => Observable.of(response.json().results));
    }

    private getFavoriteByType(type: string) {
        return this.getAccountFavoriteMovies()
            .map((movies: Array<any>) => movies.map((movie: any) => movie.id))
            .switchMap((accountFavoriteIds: any) => {
                return this.http.get(`https://api.themoviedb.org/3/movie/${type}?api_key=ca49bfda426c4e87678009d2dfc4361e&language=en-US&page=1`)
                    .map((response: any) => {
                        return response.json().results.map((movie: any) => {
                            movie.isFavorited = (accountFavoriteIds.indexOf(movie.id) !== -1 ? true : false);
                            return movie;
                        })
                    })
            })
    }
}