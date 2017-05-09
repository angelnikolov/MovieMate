import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mm-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FabButtonComponent implements OnInit {
  @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}
