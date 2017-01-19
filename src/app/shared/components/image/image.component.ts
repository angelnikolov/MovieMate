import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mm-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() src:string;
  @Output() onLoaded: EventEmitter<any> = new EventEmitter<any>();
  loadImage(){
    this.onLoaded.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
