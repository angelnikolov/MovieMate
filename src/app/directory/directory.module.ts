import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DirectoryComponent } from './directory.component';
import { DirectorySearchModule } from './directory-search/directory-search.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule,
    DirectorySearchModule,
    SharedModule
  ],
  declarations: [
    DirectoryComponent
  ],
  exports: [
    DirectoryComponent
  ]
})
export class DirectoryModule { }
