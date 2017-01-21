import { Component, OnInit, Input, Output, ElementRef, Renderer, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { popInAnimation } from '../../animations'

@Component({
  selector: 'mm-alt-listing',
  templateUrl: './alt-listing.component.html',
  styleUrls: ['./alt-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [popInAnimation]
})
export class AltListingComponent implements OnInit {
  @Input() movies: Array<any> = [];
  @Input() title: string;
  @Input() cardClasses: string;
  @Output() onMovieSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() onMoreMoviesLoaded: EventEmitter<number> = new EventEmitter<number>();

  private page: number = 1;

  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

  selectMovie(movie: any) {
    this.onMovieSelected.emit(movie);
  }

  onScroll() {
    this.page++;
    this.onMoreMoviesLoaded.emit(this.page);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.elementRef.nativeElement.querySelector('.listing__scroller').scrollTop = 0;
  }

}
