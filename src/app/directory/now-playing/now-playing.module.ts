import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    SharedModule
  ],
  exports: [],
  declarations: [
    NowPlayingComponent,
    OrganizerFormComponent
  ]
})
export class NowPlayingModule { }
