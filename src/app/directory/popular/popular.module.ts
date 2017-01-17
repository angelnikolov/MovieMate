import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularComponent } from './popular.component';
import { SharedModule } from '../../shared'

const nowPlayingRoutes: Routes = [
  {
    path: '',
    component: PopularComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(nowPlayingRoutes),
    SharedModule
  ],
  declarations: [
    PopularComponent
  ]
})
export class PopularModule { }
