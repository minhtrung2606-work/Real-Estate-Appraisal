import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LeftNavComponent,
    VerticalNavComponent
  ],
  exports: [
    LeftNavComponent,
    VerticalNavComponent
  ]
})
export class ComponentsModule { }
