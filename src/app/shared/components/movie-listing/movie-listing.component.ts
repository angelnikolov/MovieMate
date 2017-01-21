import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, trigger, state, animate, style, transition } from '@angular/core';
import { popInAnimation } from '../../animations';
@Component({
  selector: 'mm-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.scss'],
  animations: [popInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MovieListingComponent implements OnInit {
  @Input() movies: Array<any>;
  @Output() onMovieSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() onMovieAddedToFavorites: EventEmitter<any> = new EventEmitter<any>();
  @Output() onMoreMoviesLoaded: EventEmitter<number> = new EventEmitter<number>();

  private page: number = 1;

  trackByFn(index: number, movie: any) {
    return movie.id;
  }

  selectMovie(movie: any) {
    this.onMovieSelected.emit(movie);
  }

  addMovieToFavorites(id: number) {
    this.onMovieAddedToFavorites.emit(id);
  }

  onScroll(){
    this.page++;
    this.onMoreMoviesLoaded.emit(this.page);
  }

  constructor() { }

  ngOnInit() {
  }

}
