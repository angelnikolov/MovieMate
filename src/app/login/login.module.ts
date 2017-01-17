import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component'
import { LoginGuard } from './login.guard';
const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginGuard
  ]
})
export class LoginModule { }
