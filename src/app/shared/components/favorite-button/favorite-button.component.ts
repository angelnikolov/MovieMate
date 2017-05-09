import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mm-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteButtonComponent implements OnInit {
  @Input() isFavorited: Boolean;
  @Output() onFavoriteButtonClicked: EventEmitter<any> = new EventEmitter<any>();

  public favorite($event:Event): void {
    this.onFavoriteButtonClicked.emit($event);
  }
  constructor() { }

  ngOnInit() {
  }

}
