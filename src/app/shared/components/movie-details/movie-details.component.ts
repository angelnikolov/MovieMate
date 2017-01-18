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
    setTimeout(() => {
      var vibrant = new Vibrant(this.elementRef.nativeElement.querySelector('img'), 64, 1);
      var swatches = vibrant.getSwatches((palettes: any) => {
        console.log(palettes);
      });
      console.log(swatches);
      var swatches = vibrant.swatches()
      for (var swatch in swatches) {

        if (swatches.hasOwnProperty(swatch) && swatches[swatch])
          console.log('%c+' + swatch, `background: ${swatches[swatch].getHex()}`)
      }
      console.log(`linear-gradient(-212.314deg, ${swatches['Vibrant'].getHex()} 0%, ${swatches['DarkVibrant'].getHex()} 0%);`);
      this.elementRef.nativeElement.querySelector('.details__cover').style.background = `linear-gradient(to bottom right, ${swatches['DarkVibrant'].getHex()} 65%, ${swatches['Vibrant'].getHex()})`;

    }, 1000)

  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes["movie"].isFirstChange() && changes["movie"].currentValue.similarMovies)
      this.loading = false;
  }



}
