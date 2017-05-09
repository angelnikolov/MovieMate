import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mm-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {
  @Input() src:string;
  @Input() size:string;
  @Output() onLoaded: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLoadFailed: EventEmitter<any> = new EventEmitter<any>();
  public loaded: boolean = false;
  public loadFailed: boolean = false;
  loadImage(){
    this.loaded = true;
    this.onLoaded.emit();
  }
  failedLoadImage($event:Event){
    this.loaded = false;
    this.loadFailed = true;
    this.onLoadFailed.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
