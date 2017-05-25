import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav/left-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeftNavComponent],
  exports: [
    LeftNavComponent
  ]
})
export class ComponentsModule { }
