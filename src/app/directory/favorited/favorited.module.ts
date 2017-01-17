import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritedComponent } from './favorited.component';
import { SharedModule } from '../../shared'

const favoritedRoutes: Routes = [
  {
    path: '',
    component: FavoritedComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(favoritedRoutes),

    SharedModule
  ],
  declarations: [
    FavoritedComponent
  ]
})
export class FavoritedModule { }
