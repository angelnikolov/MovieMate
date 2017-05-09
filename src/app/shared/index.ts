import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ComponentsModule } from './components'
import { DirectivesModule } from './directives'
import { PipesModule } from './pipes'

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        DirectivesModule,
        PipesModule
    ],
    exports: [
        CommonModule,
        ComponentsModule,
        DirectivesModule,
        PipesModule]
})
export class SharedModule { }
