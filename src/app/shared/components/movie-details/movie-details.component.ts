import { Component, OnInit, OnChanges, Input, Output, HostListener, ChangeDetectionStrategy, EventEmitter, SimpleChanges, ElementRef } from '@angular/core';
(window as any).Vibrant = require('node-vibrant');
declare var Vibrant: any;
@Component({
  selector: 'mm-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  constructor(private elementRef: ElementRef) { }
  @Input() movie: any;
  @Output() onDetailsClosed: EventEmitter<any> = new EventEmitter<any>();
  @Output() onFavoriteToggled: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSimilarMoviesRequested: EventEmitter<any> = new EventEmitter<any>();
  @Output() onRecommendedMoviesRequested: EventEmitter<any> = new EventEmitter<any>();
  public loading: Boolean = false;
  morphBackground(hasFailed: boolean) {
    if (!hasFailed) {
      var vibrant = new Vibrant(this.elementRef.nativeElement.querySelector('img'), 64, 1);
      var swatches = vibrant.getSwatches((palettes: any) => {
        var swatches = vibrant.swatches()
        this.elementRef.nativeElement.querySelector('.details__cover').style.background = `linear-gradient(to bottom right, ${swatches['DarkVibrant'].getHex()} 65%, ${swatches['Vibrant'].getHex()})`;
      });
    }
    else {
      this.elementRef.nativeElement.querySelector('.details__cover').style.background = `linear-gradient(to bottom right, #0760a9 65%, #42A5F5)`;
    }

  }
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

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes["movie"].isFirstChange() && changes["movie"].currentValue.similarMovies)
      this.loading = false;
  }



}
