import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';


@NgModule({
  declarations: [
    LessonPageComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule
  ]
})
export class LessonModule { }
