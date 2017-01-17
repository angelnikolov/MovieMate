import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';
import { SharedModule } from '../shared'

const nowPlayingRoutes: Routes = [
  {
    path: '',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(nowPlayingRoutes),
    CommonModule,
    SharedModule
  ],
  declarations: [
    DetailsComponent
  ]
})
export class DetailsModule { }
