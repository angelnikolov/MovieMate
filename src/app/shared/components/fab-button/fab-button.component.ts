import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mm-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss']
})
export class FabButtonComponent implements OnInit {
  @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}
