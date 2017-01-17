import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

import { AppComponent } from './app.component';
import { OutletProxyComponent } from './outlet-proxy.component';
import { DirectoryComponent } from './directory/directory.component';
//Directory module directly imported, so the shared module is in the main bundle, and not reloaded in every lazy-loaded chunk
// see https://github.com/angular/angular-cli/issues/2771 for more references
import { DirectoryModule } from './directory/directory.module';

import { AuthService, MovieService, AccountService } from './shared/services';
import { AuthGuard, AnonymousOnlyGuard } from './shared/guards';

import { SidebarModule } from './sidebar/sidebar.module';

export const appRoutes: Routes = [

  {
    path: 'login', loadChildren: './login/login.module#LoginModule',
    canLoad: [AnonymousOnlyGuard]
  },
  {
    path: 'directory',
    component: DirectoryComponent,
    children: [
      {
        path: '',
        redirectTo: 'now-playing',
        pathMatch: 'full'
      },
      {
        path: 'now-playing',
        loadChildren: './directory/now-playing/now-playing.module#NowPlayingModule'
      },
      {
        path: 'favorited',
        loadChildren: './directory/favorited/favorited.module#FavoritedModule'
      },
      {
        path: 'popular',
        loadChildren: './directory/popular/popular.module#PopularModule'
      }
    ],
    canLoad: [AuthGuard]
  },
  {
    path: ':id', outlet: 'modal', component: OutletProxyComponent,
    children: [
      { path: '', loadChildren: './details/details.module#DetailsModule' }
    ]
  },
  { path: '', redirectTo: 'directory/now-playing', pathMatch: 'full' },
  {
    path: '**', redirectTo: 'directory/now-playing', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    //need this since there is a bug with lazily loading a component into router outlets
    //see https://github.com/angular/angular/issues/12842 for more references
    OutletProxyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DirectoryModule,
    RouterModule.forRoot(appRoutes),

    SidebarModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    MovieService,
    AccountService,
    AnonymousOnlyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
