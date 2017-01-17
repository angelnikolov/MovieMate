import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TintDirective } from './tint.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TintDirective
    ],
    exports: [
        TintDirective
    ]
})
export class DirectivesModule { }
