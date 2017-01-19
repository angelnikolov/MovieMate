import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter, SimpleChanges, Renderer, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mm-directory-search-list',
  templateUrl: './directory-search-list.component.html',
  styleUrls: ['./directory-search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectorySearchListComponent implements OnInit {
  @Input() items: Array<any>;
  @Input() selectedItemIndex: number;

  @Output() onSearchItemSelected: EventEmitter<any> = new EventEmitter<any>();

  selectSearchItem(id: number) {
    this.onSearchItemSelected.emit(id);
  }

  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedItemIndex']) {
      let currentIndex = changes['selectedItemIndex'].currentValue;
      if (currentIndex && !changes['selectedItemIndex'].isFirstChange()) {
        let selectedItem:HTMLElement = this.elementRef.nativeElement.querySelectorAll('.search-list__item')[currentIndex];
        
        selectedItem.scrollIntoView();
      }
    }
  }

}
