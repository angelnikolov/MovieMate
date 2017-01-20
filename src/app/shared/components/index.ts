import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListingComponent } from './movie-listing/movie-listing.component'
import { MovieCardComponent } from './movie-card/movie-card.component'
import { OverlayComponent } from './overlay/overlay.component'
import { AltListingComponent } from './alt-listing/alt-listing.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { ImageComponent } from './image/image.component';

import { DirectivesModule } from '../directives'
import { PipesModule } from '../pipes'

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [
    MovieListingComponent,
    MovieCardComponent,
    AltListingComponent,
    OverlayComponent,
    SpinnerComponent,
    FavoriteButtonComponent,
    ImageComponent
  ],
  exports: [
    MovieListingComponent,
    MovieCardComponent,
    AltListingComponent,
    OverlayComponent,
    SpinnerComponent,
    FavoriteButtonComponent,
    ImageComponent
  ]
})
export class ComponentsModule { }
