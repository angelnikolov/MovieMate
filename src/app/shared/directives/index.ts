import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TintDirective } from './tint.directive';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TintDirective,
        AutoFocusDirective
    ],
    exports: [
        TintDirective,
        AutoFocusDirective
    ]
})
export class DirectivesModule { }
