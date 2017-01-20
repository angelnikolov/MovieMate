import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { HttpModule, RequestOptions, Http, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { OutletProxyComponent } from './outlet-proxy.component';
import { DirectoryComponent } from './directory/directory.component';
//Directory module directly imported, so the shared module is in the main bundle, and not reloaded in every lazy-loaded chunk
// see https://github.com/angular/angular-cli/issues/2771 for more references
import { DirectoryModule } from './directory/directory.module';
import { AuthService, MovieService, AccountService, LocalStorageService, HttpClient } from './shared/services';
import { AuthGuard, AnonymousOnlyGuard } from './shared/guards';
import { SidebarModule } from './sidebar/sidebar.module';
import { APP_CONFIG_TOKEN } from './shared/opaques'

import { APP_CONFIG } from '../environments/environment';
import IAppConfig from '../environments/IAppConfig';


export const appRoutes: Routes = [

  {
    path: 'login', loadChildren: './login/login.module#LoginModule',
    canLoad: [AnonymousOnlyGuard]
  },
  {
    path: 'directory',
    component: DirectoryComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'now-playing',
        pathMatch: 'full',
      },
      {
        path: 'now-playing',
        loadChildren: './directory/now-playing/now-playing.module#NowPlayingModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'favorited',
        loadChildren: './directory/favorited/favorited.module#FavoritedModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'popular',
        loadChildren: './directory/popular/popular.module#PopularModule',
        canLoad: [AuthGuard]
      }
    ],
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
export function httpClientFactory(APP_CONFIG_TOKEN: IAppConfig, xhrBackend: XHRBackend, requestOptions: RequestOptions, localStorageService: LocalStorageService): Http {
  return new HttpClient(APP_CONFIG, xhrBackend, requestOptions, localStorageService);
}
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
    AnonymousOnlyGuard,
    LocalStorageService,
    { provide: Http, useFactory: httpClientFactory, deps: [APP_CONFIG_TOKEN, XHRBackend, RequestOptions, LocalStorageService] },
    { provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
