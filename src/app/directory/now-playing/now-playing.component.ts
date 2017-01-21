import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { MovieService } from '../../shared/services'
import { slideRightAnimation } from '../../shared/animations'

@Component({
  selector: 'mm-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
  animations: [slideRightAnimation]
})
export class NowPlayingComponent implements OnInit {

  private nowPlaying: Array<any>;
  public selectedMovies: Array<any> = [];
  public organizing: boolean = false;
  public selectMovie(movie: any) {
    if (!this.organizing) {
      this.router.navigate([{ outlets: { modal: String(movie.id) } }]);
    }
    else {
      if(this.selectedMovies.indexOf(movie)==-1)
      this.selectedMovies = [movie, ...this.selectedMovies];
    }
  }

  public loadMoreMovies(page: number) {
    this.movieService
      .getNowPlayingMovies(page).subscribe((res: any) => {
        this.nowPlaying = [...this.nowPlaying, ...res];
      })
  }

  public organizeMovieNight() {
    this.organizing = true;
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
