import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { MovieService } from '../../shared/services'

@Component({
  selector: 'mm-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  private popular: Array<any>;

  public selectMovie(movie: any) {
    this.router.navigate([{ outlets: { modal: String(movie.id) } }]);
  }


  public toggleMovieFavorite(toggleMovie: any) {
    this.movieService.favorMovie(toggleMovie).subscribe(() => {
      let foundMovie = this.popular.find((movie) => movie.id === toggleMovie.id);
      this.popular = [
        ...this.popular.slice(0, this.popular.indexOf(foundMovie)),
        Object.assign({}, foundMovie, { isFavorited: !foundMovie.isFavorited }),
        ...this.popular.slice(this.popular.indexOf(foundMovie) + 1)
      ]
    })
  }

  constructor(private movieService: MovieService, private router: Router) {

    this.movieService
      .getPopularMovies().subscribe((res: any) => {
        this.popular = res;
      })
  }

  ngOnInit() {
  }
}
