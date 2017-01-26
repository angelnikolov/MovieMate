import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import { NowPlayingComponent } from './now-playing.component';
import { OrganizerFormComponent } from './organizer-form/organizer-form.component';
import { SharedModule } from '../../shared'

const nowPlayingRoutes: Routes = [
  {
    path: '',
    component: NowPlayingComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(nowPlayingRoutes),
    SharedModule,
    Ng2DatetimePickerModule,
    FormsModule
  ],
  exports: [Ng2DatetimePickerModule],
  declarations: [
    NowPlayingComponent,
    OrganizerFormComponent
  ]
})
export class NowPlayingModule { }
