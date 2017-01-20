import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectorySearchComponent } from './directory-search.component';
import { SharedModule } from '../../shared'
import { DirectorySearchListComponent } from './directory-search-list/directory-search-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        DirectorySearchComponent,
        DirectorySearchListComponent
    ],
    exports: [
        DirectorySearchComponent
    ]
})
export class DirectorySearchModule { }
