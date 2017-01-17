import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ComponentsModule } from './components'
import { DirectivesModule } from './directives'

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        DirectivesModule
    ],
    exports:[
        CommonModule,
        ComponentsModule,
        DirectivesModule]
})
export class SharedModule { }
