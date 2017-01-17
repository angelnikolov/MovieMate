import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { MovieService } from '../../shared/services'

@Component({
  selector: 'mm-favorited',
  templateUrl: './favorited.component.html',
  styleUrls: ['./favorited.component.scss']
})
export class FavoritedComponent implements OnInit {

  private favorited: Array<any>;

  public selectMovie(movie: any) {
    this.router.navigate([{ outlets: { modal: String(movie.id) } }]);
  }

  public toggleMovieFavorite(toggleMovie: any) {
    this.movieService.favorMovie(toggleMovie).subscribe(() => {
      let foundMovie = this.favorited.find((movie) => movie.id === toggleMovie.id);
      this.favorited = [
        ...this.favorited.slice(0, this.favorited.indexOf(foundMovie)),
        Object.assign({}, foundMovie, { isFavorited: !foundMovie.isFavorited }),
        ...this.favorited.slice(this.favorited.indexOf(foundMovie) + 1)
      ]
    })
  }

  constructor(private http: Http, private movieService: MovieService, private router: Router) {

    this.movieService
      .getAccountFavoriteMovies().subscribe((res: any) => {
        this.favorited = res;
      })
  }

  ngOnInit() {
  }
}
