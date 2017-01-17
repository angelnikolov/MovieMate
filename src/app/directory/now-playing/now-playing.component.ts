import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { MovieService } from '../../shared/services'

@Component({
  selector: 'mm-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  private nowPlaying: Array<any>;

  public selectMovie(movie: any) {
    this.router.navigate([{ outlets: { modal: String(movie.id) } }]);
  }


  public toggleMovieFavorite(toggleMovie: any) {
    this.movieService.favorMovie(toggleMovie).subscribe(() => {
      let foundMovie = this.nowPlaying.find((movie) => movie.id === toggleMovie.id);
      this.nowPlaying = [
        ...this.nowPlaying.slice(0, this.nowPlaying.indexOf(foundMovie)),
        Object.assign({}, foundMovie, { isFavorited: !foundMovie.isFavorited }),
        ...this.nowPlaying.slice(this.nowPlaying.indexOf(foundMovie) + 1)
      ]
    })
  }

  constructor(private movieService: MovieService, private router: Router) {

    this.movieService
      .getNowPlayingMovies().subscribe((res: any) => {
        this.nowPlaying = res;
      })
  }

  ngOnInit() {
  }

}
