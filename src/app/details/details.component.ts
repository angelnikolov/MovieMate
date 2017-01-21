import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';
import { MovieService } from '../shared/services'
import { routeAnimation, slideAnimation, fadeInAnimation } from '../shared/animations';

@Component({
  selector: 'mm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [routeAnimation, fadeInAnimation, slideAnimation]
})
export class DetailsComponent implements OnInit {


  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  public isOverlayShown: boolean = false;
  public movie: any;
  private additionalMoviesType: string;
  @HostBinding('@routeAnimation') public routeAnimation: void;
  @HostListener('@routeAnimation.done')
  toggleOverlay() {
    this.isOverlayShown = !this.isOverlayShown;
  }
  @HostListener('document:keyup', ['$event'])
  closeByEscaping($event: KeyboardEvent) {
    if ($event.keyCode === 27) {
      this.closeDetails();
    }
  }
  public selectMovie(movie: any) {
    this.router.navigate([{ outlets: { modal: String(movie.id) } }]);
  }

  public getSimilarMovies(movie: any) {
    this.additionalMoviesType = 'similar';
    this.movieService.getSimilarMovies(movie).subscribe((similarMovies) => {
      this.movie = Object.assign({}, this.movie, { additionalMovies: similarMovies });
    })
  }

  public getRecommendedMovies(movie: any) {
    this.additionalMoviesType = 'recommended';
    this.movieService.getRecommendedMovies(movie).subscribe((recommendedMovies) => {
      this.movie = Object.assign({}, this.movie, { additionalMovies: recommendedMovies });
    })
  }

  public toggleFavorite(movie: any) {
    this.movie = Object.assign({}, this.movie, { isFavorited: !this.movie.isFavorited })
    this.movieService.favorMovie(movie)
      .subscribe(() => {
        movie.isFavorited = !movie.isFavorited;
      })
  }

  public closeDetails() {
    this.isOverlayShown = false;
    setTimeout(() => {
      this.router.navigate([{ outlets: { modal: null } }]);
    }, 100);
  }

  loadMoreMovies(page: number) {
    if (this.additionalMoviesType === 'similar') {
      this.movieService
        .getSimilarMovies(this.movie, page).subscribe((res: any) => {
          this.movie = Object.assign({}, this.movie, { additionalMovies: [...this.movie.additionalMovies, ...res] });
        })
    }
    else if (this.additionalMoviesType === 'recommended') {
      this.movieService
        .getRecommendedMovies(this.movie, page).subscribe((res: any) => {
          this.movie = Object.assign({}, this.movie, { additionalMovies: [...this.movie.additionalMovies, ...res] });
        })
    }
  }
  ngOnInit() {
    this.route.params
      .pluck('id')
      .switchMap((id: number) => this.movieService.getMovieDetails(id))
      .subscribe((movie: any) => {
        this.movie = movie;
      })

  }

}
