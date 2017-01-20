import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectorySearchComponent } from './directory-search.component';
import { SharedModule } from '../../shared'
import { SearchService } from '../../shared/services'
import { DirectorySearchListComponent } from './directory-search-list/directory-search-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [SearchService],
    declarations: [
        DirectorySearchComponent,
        DirectorySearchListComponent
    ],
    exports: [
        DirectorySearchComponent
    ]
})
export class DirectorySearchModule { }
