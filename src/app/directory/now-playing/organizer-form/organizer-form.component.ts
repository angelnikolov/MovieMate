import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mm-organizer-form',
  templateUrl: './organizer-form.component.html',
  styleUrls: ['./organizer-form.component.scss']
})
export class OrganizerFormComponent implements OnInit {
  @Output() onInvitationsSent: EventEmitter<any> = new EventEmitter<any>();
  sendInvitations() {
    this.onInvitationsSent.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
