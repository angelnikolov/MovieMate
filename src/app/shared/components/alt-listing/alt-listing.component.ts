import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mm-alt-listing',
  templateUrl: './alt-listing.component.html',
  styleUrls: ['./alt-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AltListingComponent implements OnInit {
  @Input() movies: Array<any> = [];
  @Output() onMovieSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  selectMovie(movie: any) {
    this.onMovieSelected.emit(movie);
  }
  ngOnInit() {
  }

}
