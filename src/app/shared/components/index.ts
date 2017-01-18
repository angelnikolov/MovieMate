import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListingComponent } from './movie-listing/movie-listing.component'
import { MovieCardComponent } from './movie-card/movie-card.component'
import { OverlayComponent } from './overlay/overlay.component'
import { AltListingComponent } from './alt-listing/alt-listing.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';

import { DirectivesModule } from '../directives'

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [
    MovieListingComponent,
    MovieCardComponent,
    AltListingComponent,
    OverlayComponent,
    SpinnerComponent,
    FavoriteButtonComponent
  ],
  exports: [
    MovieListingComponent,
    MovieCardComponent,
    AltListingComponent,
    OverlayComponent,
    SpinnerComponent,
    FavoriteButtonComponent
  ]
})
export class ComponentsModule { }
