export { HighlightPipe } from './highlight.pipe'

import { NgModule } from '@angular/core';
import { HighlightPipe } from './highlight.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
    CommonModule
    ],
    declarations: [
        HighlightPipe
    ],
    exports: [
        HighlightPipe
    ]
})
export class PipesModule { }
