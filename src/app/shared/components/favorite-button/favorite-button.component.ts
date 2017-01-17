import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mm-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
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
