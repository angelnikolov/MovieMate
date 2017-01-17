import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListingComponent } from './movie-listing/movie-listing.component'
import { MovieCardComponent } from './movie-card/movie-card.component'
import { MovieDetailsComponent } from './movie-details/movie-details.component'
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
    MovieDetailsComponent,
    OverlayComponent,
    AltListingComponent,
    SpinnerComponent,
    FavoriteButtonComponent
  ],
  exports: [
    MovieListingComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    OverlayComponent,
    AltListingComponent,
    SpinnerComponent,
    FavoriteButtonComponent
  ]
})
export class ComponentsModule { }
