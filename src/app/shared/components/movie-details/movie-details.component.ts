import { Component, OnInit, OnChanges, Input, Output, HostListener, ChangeDetectionStrategy, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'mm-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  @Input() movie: any;
  @Output() onDetailsClosed: EventEmitter<any> = new EventEmitter<any>();
  @Output() onFavoriteToggled: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSimilarMoviesRequested: EventEmitter<any> = new EventEmitter<any>();
  @Output() onRecommendedMoviesRequested: EventEmitter<any> = new EventEmitter<any>();
  public loading: Boolean = false;

  toggleFavorite() {
    this.onFavoriteToggled.emit(this.movie);
  }

  getSimilarMovies() {
    this.loading = true;
    this.onSimilarMoviesRequested.emit(this.movie);
  }

  getRecommendedMovies() {
    this.loading = true;
    this.onRecommendedMoviesRequested.emit(this.movie);
  }

  closeDetails($event: any) {
    this.onDetailsClosed.emit();
  }
  getSimilarMovie($event: any) {
    this.onDetailsClosed.emit();
  }
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    if(!changes["movie"].isFirstChange() && changes["movie"].currentValue.similarMovies)
    this.loading = false;
  }



}
