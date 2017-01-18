import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';
import { SharedModule } from '../shared'
import { MovieDetailsComponent } from '../shared/components/movie-details/movie-details.component'

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
    DetailsComponent,
    MovieDetailsComponent
  ],
  exports: [MovieDetailsComponent]
})
export class DetailsModule { }
