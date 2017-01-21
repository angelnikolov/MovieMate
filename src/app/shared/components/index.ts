import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListingComponent } from './movie-listing/movie-listing.component'
import { MovieCardComponent } from './movie-card/movie-card.component'
import { OverlayComponent } from './overlay/overlay.component'
import { AltListingComponent } from './alt-listing/alt-listing.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { ImageComponent } from './image/image.component';
import { FabButtonComponent } from './fab-button/fab-button.component';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { DirectivesModule } from '../directives'
import { PipesModule } from '../pipes'

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    InfiniteScrollModule
  ],
  declarations: [
    MovieListingComponent,
    MovieCardComponent,
    AltListingComponent,
    OverlayComponent,
    SpinnerComponent,
    FavoriteButtonComponent,
    ImageComponent,
    FabButtonComponent
  ],
  exports: [
    MovieListingComponent,
    MovieCardComponent,
    AltListingComponent,
    OverlayComponent,
    SpinnerComponent,
    FavoriteButtonComponent,
    ImageComponent,
    FabButtonComponent
  ]
})
export class ComponentsModule { }
