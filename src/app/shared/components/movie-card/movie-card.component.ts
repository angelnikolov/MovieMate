import { Component, OnInit, Input, Output, HostListener, HostBinding, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'mm-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Input() size: string;
  @Output() onMovieSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() onMovieAddedToFavorites: EventEmitter<any> = new EventEmitter<any>();
  @Output() onMovieRated: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('click') onCardClicked() {
    this.onMovieSelected.emit(this.movie);
  }
  addToFavorites($event: Event, movie: any) {
    $event.stopPropagation();
    // this.movie.isFavorited = !this.movie.isFavorited;
    this.onMovieAddedToFavorites.emit(movie);

  }
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }



}
